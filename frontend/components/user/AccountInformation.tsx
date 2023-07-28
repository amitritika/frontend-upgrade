import ReactCropInput from "@/components/user/ReactCropInput"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import { getCookie, isAuth , updateUser, forgotPassword} from '@/actions/auth';
import { getProfile, update } from '@/actions/user';
import { API } from '@/config';

import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '@/helpers/photohelpers'

    interface ImageCrop {
        unit: string;
        width: number;
        aspect: number;
      }
      
      interface ImageState {
        imageSrc: string;
        imgSrc: string | null;
        imgSrcExt: string | null;
        crop: ImageCrop;
        croppedImageUrl: string;
        imgName: string | null;
      }
      
      interface ValuesState {
        username: string;
        name: string;
        email: string;
        about: string;
        error: string | false;
        success: boolean;
        loading: boolean;
        photo: string | File;
        userData: FormData;
        message: string;
      }
      
const AccountUpdate: React.FC = () => {
        const [values, setValues] = useState<ValuesState>({
          username: '',
          name: '',
          email: '',
          about: '',
          error: false,
          success: false,
          loading: false,
          photo: '',
          userData: new FormData(),
          message: '',
        });
      
        const [image, setImage] = useState<ImageState>({
          imageSrc: '/images/profile.png',
          imgSrc: null,
          imgSrcExt: null,
          crop: {
            unit: '%',
            width: 30,
            aspect: 1 / 1,
          },
          croppedImageUrl: '',
          imgName: null,
        });
      
        const imagePreviewCanvasRef = useRef<HTMLImageElement | null>(null);
        const fileInputRef = useRef<HTMLInputElement | null>(null);
      
        const imageMaxSize = 1000000000; // bytes
        const acceptedFileTypes =
          'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
        const acceptedFileTypesArray = acceptedFileTypes
          .split(',')
          .map((item) => item.trim());
      
        const token = getCookie('token');
        const {
          username,
          name,
          email,
          about,
          error,
          success,
          loading,
          photo,
          userData,
          message,
        } = values;
      
        const { imageSrc, imgSrc, imgSrcExt, crop, croppedImageUrl, imgName } = image;
      
        useEffect(() => {
          const init = () => {
            getProfile(token).then((data) => {
              if (data.error) {
                setValues({ ...values, error: data.error });
              } else {
                setValues({
                  ...values,
                  username: data.username,
                  name: data.name,
                  email: data.email,
                  about: data.about,
                });
      
                if (data.photo && data.photo.data) {
                  setImage({
                    ...image,
                    imageSrc: `${API}/user/photo/${data.username}`,
                  });
                }
              }
            });
          };
      
          init();
        }, []);
      
        const verifyFile = (files: FileList | null) => {
          if (files && files.length > 0) {
            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
      
            if (currentFileSize > imageMaxSize) {
              alert(`This file is not allowed. ${currentFileSize} bytes is too large`);
              return false;
            }
      
            if (!acceptedFileTypesArray.includes(currentFileType)) {
              alert('This file is not allowed. Only images are allowed.');
              return false;
            }
      
            return true;
          }
      
          return false;
        };
      
        const imageUrl = (url: string) => {
          setImage({ ...image, croppedImageUrl: url });
        };
      
        const imageData = (data: string) => {
          if (imgSrc !== null) {
            const imageData64 = data;
            const myFilename = 'previewFile.jpeg';
      
            const myNewCroppedFile = base64StringtoFile(imageData64, myFilename);
      
            const userFormData = new FormData();
            userFormData.set('photosrc', myNewCroppedFile);
            setValues({ ...values, userData: userFormData });
          }
        };
      
        const handleCropClick = () => {
          setImage({ ...image, imgSrc: null });
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        };
      
        const handleChange = (name: string) => (
            e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
          ) => {
            const value = name === 'photo' ? (e.target as HTMLInputElement).files?.[0] : e.target.value;
            
            if (e.target instanceof HTMLInputElement) {
              const userFormData = new FormData();
              userFormData.set(name, value as string | Blob);
              setValues({
                ...values,
                [name]: value,
                userData: userFormData,
                error: false,
                success: false,
              });
          
              if (name === 'photo' && e.target.files) {
                const files = e.target.files;
                if (files.length > 0) {
                  const isVerified = verifyFile(files);
                  if (isVerified) {
                    const currentFile = files[0];
                    const myFileItemReader = new FileReader();
                    myFileItemReader.addEventListener('load', () => {
                      const myResult = myFileItemReader.result as string;
                      setImage({
                        ...image,
                        imgSrc: myResult,
                        imgSrcExt: extractImageFileExtensionFromBase64(myResult),
                        imgName: currentFile.name,
                      });
                    });
                    myFileItemReader.readAsDataURL(currentFile);
                  }
                }
              }
            }
          };
      
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setValues({ ...values, loading: true });
          update(token, userData).then((data) => {
            if (data.error) {
              setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
              updateUser(data, () => {
                setValues({
                  ...values,
                  username: data.username,
                  name: data.name,
                  email: data.email,
                  about: data.about,
                  success: true,
                  loading: false,
                });
              });
            }
          });
        };
      
        const handlePassword = () => {
          setValues({ ...values, message: '', error: '' });
          forgotPassword({ email }).then((data) => {
            if (data.error) {
              setValues({ ...values, error: data.error });
            } else {
              setValues({ ...values, message: data.message });
            }
          });
        };
      
        const showError = () => (
          <div className="daisy-alert daisy-alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
          </div>
        );

        const showMessage = () => (message ? <div className="daisy-alert daisy-alert-sucess">{message}</div> : '');

    const showSuccess = () => (
        <div className="daisy-alert daisy-alert-danger" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="daisy-alert daisy-alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );
  
  return (
      <div className="container mt-4">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/12">
      <button onClick={() => Router.back()} className="daisy-btn daisy-btn-primary m-2">Go Back</button>
    </div>
    <div className="m-2 md:w-1/6">
      <img
        src={imageSrc}
        className="img img-fluid img-thumbnail mb-3"
        style={{ maxHeight: 'auto', maxWidth: '100%' }}
        alt="user profile"
      />
      {croppedImageUrl && (
        <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
      )}
      <p>{imgName}</p>
    </div>
    <div className="md:w-2/3">
      {showSuccess()}
      {showMessage()}
      {showError()}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="daisy-btn daisy-btn-outline-info">
            Profile photo
            <input ref={fileInputRef} onChange={handleChange('photo')} type="file" accept="image/*" hidden />
          </label>
          {imgSrc !== null && (
            <div>
              <ReactCropInput src={imgSrc} url={imageUrl} data={imageData} />
              <button className="daisy-btn daisy-btn-sm daisy-btn-primary" onClick={handleCropClick}>OK</button>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="daisy-label text-xl"><span className="daisy-lable-text">Email</span></label>
          <input type="email" name="email" onChange={handleChange('email')} value={email} disabled className="daisy-input daisy-input-bordered w-full max-w-xs" />
        </div>
        <div className="mb-4">
          <label className="daisy-label text-xl">Name</label>
          <input type="text" name="name" onChange={handleChange('name')} value={name} className="daisy-input daisy-input-bordered input-success w-full max-w-xs" />
        </div>
        <div className="mb-4">
          <label className="daisy-label text-xl">Username</label>
          <input type="text" name="username" onChange={handleChange('username')} value={username} className="daisy-input daisy-input-bordered input-success w-full max-w-xs" />
        </div>
        <div className="mb-4">
          <button type="submit" className="button-primary w-full">
            Update
          </button>
        </div>
      </form>
      <Link href="#" className="daisy-btn daisy-btn-error mt-4 w-full text-2xl" onClick={handlePassword}>Change Password</Link>
    </div>
  </div>
</div>
)
}

export default AccountUpdate;
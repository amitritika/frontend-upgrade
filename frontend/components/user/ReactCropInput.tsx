import ReactDOM from 'react-dom';
import React, { PureComponent, ChangeEvent } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

//import './App.css';

interface ReactComponentInputProps {
  src: string;
  url: (croppedImageUrl: string) => void;
  data: (dataUrl: string) => void;
}

interface ReactComponentInputState {
  crop: Crop;
  croppedImageUrl: string;
}

class ReactComponentInput extends PureComponent<ReactComponentInputProps, ReactComponentInputState> {
  private imageRef: HTMLImageElement | null = null;
  private fileUrl: string | null = null;

  state: ReactComponentInputState = {
    crop: {
      unit: '%',
      width: 90,
      aspect: 1 / 1,
    },
    croppedImageUrl: '',
  };

  onImageLoaded = (image: HTMLImageElement) => {
    this.imageRef = image;
  };

  onCropComplete = (crop: Crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop: Crop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop: Crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
    this.props.url(this.state.croppedImageUrl);
  }

  getCroppedImg(image: HTMLImageElement, crop: Crop, fileName: string): Promise<string> {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width || 0;
    canvas.height = crop.height || 0;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Canvas context not available.');
    }

    ctx.drawImage(
      image,
      (crop.x || 0) * scaleX,
      (crop.y || 0) * scaleY,
      (crop.width || 0) * scaleX,
      (crop.height || 0) * scaleY,
      0,
      0,
      crop.width || 0,
      crop.height || 0
    );

    this.props.data(canvas.toDataURL('image/jpeg'));
    //console.log(canvas.toDataURL('image/jpeg'));

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob: any) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl || '');
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop } = this.state;
    const { src } = this.props;

    return (
      <div className="App">
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
      </div>
    );
  }
}

export default ReactComponentInput;

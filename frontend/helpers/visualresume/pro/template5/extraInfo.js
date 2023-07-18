import VL from "../../../../components/visualresume/pro/template5/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/pro/template5/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/pro/template5/resume/RightBlockLogo"
import RightBlockBulletSmall from "../../../../components/visualresume/pro/template5/resume/RightBlockBulletSmall"
import BlockBulletSmall from "../../../../components/visualresume/pro/template5/resume/BlockBulletSmall"
import {textWidth} from "./template5";
const extraInfo = (obj, data, marginSec, marginBullet, marginPage, logo) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let tH = 0;
  
  if(rightH > countR * 297){
    countR++;
    rightH = 297 * (countR - 1) + marginPage;
    if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }
  }
  if(countR > countL){
    obj.block.components.push(RightBlockLogo);
    obj.block.ids.push("extra-logo");
    obj.block.props.push({top: rightH + marginSec, name: logo});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("extra");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("extra-logo");
    obj.right.props.push({top: rightH + marginSec, name: logo});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("extra");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            if(countR == 2){
              obj.page1.right.components = obj.right.components;
              obj.page1.right.ids = obj.right.ids;
              obj.page1.right.props = obj.right.props;
            }
            
            obj.block.components.push(RightBlockLogo);
            obj.block.ids.push("project-logo");
            obj.block.props.push({top: rightH + marginSec, name: logo});

            obj.block.components.push(RightBlockHeading);
            obj.block.ids.push("project");
            obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
            
            rightH = rightH + marginSec + 13;
    
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
           
            obj.block.components.push(RightBlockLogo);
            obj.block.ids.push("project-logo");
            obj.block.props.push({top: rightH + marginSec, name: logo});

            obj.block.components.push(RightBlockHeading);
            obj.block.ids.push("project");
            obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
            
            rightH = rightH + marginSec + 13;
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          if(countR == 2){
            obj.page1.right.components = obj.right.components;
            obj.page1.right.ids = obj.right.ids;
            obj.page1.right.props = obj.right.props;
          }
          
          
          obj.right.components.push(RightBlockLogo);
          obj.right.ids.push("project-logo");
          obj.right.props.push({top: rightH + marginSec, name: logo});

          obj.right.components.push(RightBlockHeading);
          obj.right.ids.push("project");
          obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
          
          rightH = rightH + marginSec + 13;
        
        }
    }
 
  data.value.map((v, i)=>{
    marginSec = 1
    let str = "project-heading-" + i.toString();
    let arr = textWidth("calibri", "normal", "3.2pt", "113px", v);
    let height = arr[0];
    if(countR > countL){
      arr = textWidth("calibri", "normal", "3.2pt", "183px", v);
      height = arr[0];
      obj.block.components.push(BlockBulletSmall);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: height, name: v});
      rightH = rightH + marginSec + height;
    }else{
      obj.right.components.push(RightBlockBulletSmall);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: height, name: v});
      rightH = rightH + marginSec + height;
    }
    
    
    
    if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            arr = textWidth("calibri", "normal", "3.2pt", "183px", v);
            height = arr[0];
            obj.block.components.push(BlockBulletSmall);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, name: v});
            rightH = rightH + marginSec + height;
           
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            arr = textWidth("calibri", "normal", "3.2pt", "183px", v);
            height = arr[0];
            obj.block.components.push(BlockBulletSmall);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
            rightH = rightH + marginSec + height;
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }
          
          arr = textWidth("calibri", "normal", "3.2pt", "113px", v);
            height = arr[0];
          obj.right.components.push(RightBlockBulletSmall);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: height, data: v});
          rightH = rightH + marginSec + height;
        }
    }
    
  })
  
  
  if(countR == 1){
      
      obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
    }
  obj.countL = countL;
  obj.countR = countR;
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

               

export default extraInfo;
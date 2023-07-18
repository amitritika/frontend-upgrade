
import RightBlockHeading from "../../../../components/visualresume/pro/template2/resume/RightBlockHeading"
import BlockHeading from "../../../../components/visualresume/pro/template2/resume/BlockHeading"
import RightBlockLogo from "../../../../components/visualresume/pro/template2/resume/RightBlockLogo"
import RightBlockEdu from "../../../../components/visualresume/pro/template2/resume/RightBlockEdu"
import BlockEdu from "../../../../components/visualresume/pro/template2/resume/BlockEdu"
import { FaGraduationCap } from "react-icons/fa";

const educationInfo = (obj, data, marginSec, marginBullet, marginPage) => {
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
    obj.block.ids.push("education-logo");
    obj.block.props.push({top: rightH + marginSec, name: FaGraduationCap});
    
    obj.block.components.push(BlockHeading);
    obj.block.ids.push("education");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("education-logo");
    obj.right.props.push({top: rightH + marginSec, name: FaGraduationCap});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("education");
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
            obj.block.props.push({top: rightH + marginSec, name: FaGraduationCap});

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
            obj.block.props.push({top: rightH + marginSec, name: FaGraduationCap});

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
          obj.right.props.push({top: rightH + marginSec, name: FaGraduationCap});

          obj.right.components.push(RightBlockHeading);
          obj.right.ids.push("project");
          obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
          
          rightH = rightH + marginSec + 13;
        
        }
    }
 
  data.value.map((v, i)=>{
    let line = true;
      if(i == 0){
        line = false;
      }
    if(v.optional){
    
    let str = "education-heading-" + i.toString();
    if(countR > countL){
      
      obj.block.components.push(BlockEdu);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: 10, data: v, line : line});
      
      rightH = rightH + marginSec +  10
      
    }else{
      obj.right.components.push(RightBlockEdu);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: 20, data: v, line : line});
      
     rightH = rightH + marginSec +  20
      
    }
    
    
    
    if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            
            obj.block.components.push(BlockEdu);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 10, data: v, line : line});
    
            rightH = rightH + marginSec +  10
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            
            
            
            obj.block.components.push(BlockEdu);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: 10, data: v, line : line});
    
            rightH = rightH + marginSec +  10
            
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

          obj.right.components.push(RightBlockEdu);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: 20, data: v, line : line});
          rightH = rightH + marginSec +  20
        }
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

export default educationInfo;
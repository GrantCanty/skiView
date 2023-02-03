import './ResortList.css';
import Resort from './Resort';



function ResortList(props) {
  console.log([...props.resorts.keys()])
  return [...props.resorts.keys()].map((item)=>{
      return <Resort key={item} resortName={item} lat={props.resorts.get(item)[0]} lon={props.resorts.get(item)[1]} appid={props.appId} />
  })
}

export default ResortList;

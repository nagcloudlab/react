

export function withCard(Input){
   return (props)=>{
       return (
           <div className="card">
               <div className="card-header">{props.title}</div>
               <div className="card-body">
                   <Input/>
               </div>
           </div>
       )
   }
}
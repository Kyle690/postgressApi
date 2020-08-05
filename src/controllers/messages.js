import Model from '../models/model';
const messagesModal = new Model('messages');

export const messagePage=async(req,res)=>{
  try{
    const data = await messagesModal.select('name,message');
    res.status(200).json({messages:data.rows});
  }catch(err){
  res.status(200).json({messages:err.stack});
  }
}

export const addMessage=async (req,res)=>{
  const {name,message}=req.body;
  const columns = 'name,message';
  const values = `'${name}','${message}'`;
  try{
    const data = await messagesModal.insertWithReturn(columns,values);
    res.status(200).json({messages:data.rows});
  }catch(err){
    res.status(200).json({messages:err.stack});
  }
}

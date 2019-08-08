const express=require("express")
const app=express();
app.get('/',(req,res)=>{
app.json("server working")
});
app.get('/tasks',(req,res)=>{
    app.json(tasks)
    });
    app.post('/tasks',(req,res)=>{
        const newItem=req.body;
        tasks.push(newItem)
        app.json(tasks)
        });
        app.delete('/tasks/id',(req,res)=>{
            const id=parseInt(req.params.id)
            tasks.map(element,index=>{
                if(element.id ===id)
                delete element.splic(index,1);
            })
            app.json(tasks)
            });
const PORT=1234;
app.listen(PORT,()=>console.log('server listing to port '));
const tasks=[
{
    id:1,
    title:"go to the work"
},
{
    id:2,
    title:"shopping"
},
{
    id:3,
    title:"watch moving"
},
]
//NODE:
//console.log(_dirname,_filename)
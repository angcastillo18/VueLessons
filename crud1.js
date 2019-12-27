const app=new Vue({
    el:'#app',
    data:{
        title:'GYM con Vue',
        task:[],
        newTask:''
    },
    methods:{
        addTask(){
            this.task.push({
                training:this.newTask,
                state:false
            });
            this.newTask='';
            localStorage.setItem('gym-vue', JSON.stringify(this.task))
        },
        editTask(index){
            this.task[index].state=true;
            localStorage.setItem('gym-vue', JSON.stringify(this.task))
        },
        deleteTask(index){
            this.task.splice(index,1);
            localStorage.setItem('gym-vue', JSON.stringify(this.task))
        }
    },
    created(){
        let datosDB=JSON.parse(localStorage.getItem('gym-vue'))
        if(datosDB ===null){
            this.task=[];
        }else{
            this.task=datosDB;
        }
    }

})
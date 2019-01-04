const vm = new Vue({
    el:'#app',
    directives:{
        focus(el,bindings){
            if(bindings.value){
                el.focus();//获取焦点
            }
        }
    },
    data:{
        todos:[
            {
                isSelected:false,
                title:'睡觉'
            },
            {
                isSelected:false,
                title:'吃饭'
            }
        ],
        title:'',
        cur:'',
        hash:''
    },
    created(){
      this.todos=JSON.parse(localStorage.getItem('data'))||this.todos;
      this.hash=window.location.hash.slice(2)||'all';
      window.addEventListener('hashchange',()=>{
          this.hash=window.location.hash.slice(2);
      },false)
    },
    watch:{
        todos:{
            handler(){
                localStorage.setItem('data',JSON.stringify(this.todos));
            },deep:true
        }

    },
    methods:{
        add(){
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title=''
        },
        remove(todo){
            this.todos=this.todos.filter(item=>item!==todo);
        },
        remember(todo){
            this.cur=todo;
        },
        cancel(){
            this.cur='';
        }
    },
    computed:{
        filtertodos(){
          if(this.hash==="all") return this.todos;
          if(this.hash==="finish") return this.todos.filter(item=>item.isSelected);
          if(this.hash==="unfinish") return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        },
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
})
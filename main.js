class Task{
    constructor(ordinalNumber, title){
        this.ordinalNumber = ordinalNumber;
        this.title = title;
    }
}

var toDoList = new Vue({
    el: "#toDoList",
    data: {
        title: "",
        taskList: [],
        taskCreateCount: 0
    },

    methods: {
        addTask: function(title){
            this.taskList.push(new Task(this.taskCreateCount + 1, title));
            this.title = "";
            this.taskCreateCount++;
        },

        canAddTask: function(){
            return this.title.length !== 0;
        },

        deleteTask: function(ordinalNumber){
            this.taskList = this.taskList.filter(task => task.ordinalNumber !== ordinalNumber);
            if(this.taskList.length === 0) this.taskCreateCount = 0;
        },
    }
});
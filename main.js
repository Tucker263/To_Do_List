class Task{
    constructor(ordinalNumber, title, contents){
        this.ordinalNumber = ordinalNumber;
        this.title = title;
        this.contents = contents;
    }
}

var toDoList = new Vue({
    el: "#toDoList",
    data: {
        title: "",
        contents: "",
        taskList: [],
        taskCreateCount: 0
    },

    methods: {
        addTask: function(title, contents){
            this.taskList.push(new Task(this.taskCreateCount + 1, title, contents));
            this.title = "";
            this.contents = "";
            this.taskCreateCount++;
        },

        canAddTask: function(){
            return this.title.length !== 0 && this.contents.length !== 0;
        },

        deleteTask: function(ordinalNumber){
            this.taskList = this.taskList.filter(task => task.ordinalNumber !== ordinalNumber);
            if(this.taskList.length === 0) this.taskCreateCount = 0;
        },
    }
});
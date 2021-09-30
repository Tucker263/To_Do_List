class Task{
    constructor(ordinalNumber, title, entryDate){
        this.ordinalNumber = ordinalNumber;
        this.title = title;
        this.entryDate = entryDate;
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
        addTask: function(){
            this.taskList.push(new Task(this.taskCreateCount + 1, this.title, this.getEntryDate()));
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

        getEntryDate(){
            let date = new Date();
            let format = "YYYY/MM/DD";
            let entryDate = format.replace("YYYY", date.getFullYear())
                           .replace("MM", date.getMonth() + 1)
                           .replace("DD", date.getDate());
            return entryDate;
        }
    }
});
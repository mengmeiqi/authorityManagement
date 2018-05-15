<div class="user_information_nr" id="provincial2">
    <select class="information_text" id="selected11" v-model="selected12">
        <option v-for="provincial2 in address2" v-bind:id="provincial2.id" v-html="provincial2.name"></option>
    </select>
    <select class="information_text" id="selected12" v-model="selected13">
        <option v-for="provincial_tow2 in selected_tow2" v-bind:id="provincial_tow2.id" v-html="provincial_tow2.name"></option>
    </select>
    <select class="information_text" id="selected13">
        <option v-for="provincial_three2 in selected_three2" v-bind:id="provincial_three2.id" v-html="provincial_three2.name"></option>
    </select>
</div>
address2 = new Vue({
    el: "#provincial2",
    data: {
        address2: "",
        selected12: "",
        selected13: "",
        data2: ""
    },
    computed: {
        selected_tow2:function() {
            var selected_tow2 = [];
                selectedDepart2 = this.$data.selected12;
            this.$data.address2.forEach(function(c) {
                if(c.name == selectedDepart2) {
                    selected_tow2 = c.children
                };
            });
            address2.$set("data2", selected_tow2);
            return selected_tow2;
        },
        selected_three2: function() {
            var selected_three2 = [],
                selectedDepart3 = this.$data.selected13;
            this.$data.data2.forEach(function(d) {
                if(d.name == selectedDepart3) {
                    selected_three2 = d.children
                };
            });
            return selected_three2;
        }
    }
});
$.getJSON("address.json", function(result) {
    address2.address2 = result.data.china;
});

prochange:function(){
        this.proname=this.getname(this.pro,this.pid);//获取省份名,

        this.city=this.all.city[this.pid];
        this.cid=this.city[0]['id'];
        this.county=this.all.county[this.cid];
        if(this.county.length>0){
            this.ccid=this.county[0]['id'];
        }
    },
    getname:function(arr,id){
        for(var i=0;i<len;i++){
            if(arr[i]['id']==id){
                return arr[i]['name'];
            }
        }
        return false;
    }
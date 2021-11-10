Ext.define('SurveyApp.mixins.GenericMixin',{

    /**
     * @method
     * load the grid store
     */
    loadGridStore:function(){
        var grid = this.getView();
        var store = grid.getStore();
        store.load();

    },
    
    getSelectedRecord:function(){
        let me = this;
        let records = me.getSelectedRecords();
        if(records[0]){
            return records[0];
        }
        else{
            Ext.Msg.alert('Error','Select at least on record!');
            return;
        }
        
    },
    getSelectedRecords:function(){

        let grid = this.getView();
        let records = grid.getSelectionModel().getSelection();
        return records;
        
    },
     removeSelectedRecord:function(){
         Ext.Ajax.request({
            url:url,
            method:'DELETE',
            success:function(response,eOpts){
                let result = Classic.Util.jsonToPojo(response.responseText);
                if(result.success){
                    Ext.toast({
                        html:'Deleted successfully',
                        title:'Success',
                        width:200,
                        align:'t'
                    });
                }
            },
            failure:function(response,eOpts){
                console.log(response.responseText);
                let result = Classic.Util.jsonToPojo(response.responseText);
                Classic.Util.showError(result.msg);
            }            
         });
         grid.getStore().reload();
        
    },
    /**
     * @method to delete multiple records
     */
     removeSelectedRecords:function(){
        //convert the whole thing into an array and send that to the ajax/end-point to remove the records
    },
    onChangeMixin:function(referenceField){
        let view = this.getView();
        let foundField = view.lookupReference(referenceField);
        foundField.setVisible(true);

    }
})
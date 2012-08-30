/**
 * Created with JetBrains WebStorm.
 * User: Laptop
 * Date: 8/9/12
 * Time: 12:08 PM
 * To change this template use File | Settings | File Templates.
 */


function matrix(){
    if(record.get("project")=="Eustis"){
        Ext.getCmp('bottomtab').add({ image: 'Eustis', html: '<IFRAME src="images/Beecher Bay.jpg" width="1024" height="692" scrolling="none" frameborder="0"></IFRAME>' });
    }
    else if(record.get("project")=="Strathmore"){
        Ext.getCmp('bottomtab').removeAll();
        Ext.getCmp('bottomtab').add({ image: 'image', autoScroll: 'true', html: '<IFRAME src="/image/Strathmore.jpg" width="1024" height="768" scrolling="none" frameborder="0"></IFRAME>' });
    }
}

/*   if(record.get("project")=="Beecher Bay"){
 Ext.getCmp('bottomtab').add({ image: 'Eustis', html: '<IFRAME src="images/Beecher Bay.jpg" width="1024" height="692" scrolling="none" frameborder="0"></IFRAME>' });
 }

 else if(record.get("project")=="Eustis"){
 Ext.getCmp('bottomtab').removeAll();
 Ext.getCmp('bottomtab').add({ title: 'image', autoScroll: 'true', html: '<IFRAME src="images/Eustis.jpg" width="1024" height="768" scrolling="none" frameborder="0"></IFRAME>' });
 }

    else if(record.get("project")=="Lake Alfred"){
        Ext.getCmp('bottomtab').add({ title: 'image', autoScroll: 'true', html: '<IFRAME src="images/Lake Alfred.jpg" width="1024" height="713" scrolling="none" frameborder="0"></IFRAME>' });
    }*/
onRowselectionmodelSelect: function(rowmodel, record, index, options) {
    if(record.get("market")=="Military"){
        Ext.getCmp('bottomtab').child('pictures');
    }


    good stuff

    if(record.get("catagory")=="Military"){
        Ext.getCmp('bottomtab').add({ image: 'Military', autoScroll: 'true', html: '<IFRAME src="images/WestPoint.jpg" width="1024" height="768" scrolling="none" frameborder="0"></IFRAME>' });

    }




    if(record.get("project")=="Eustis"){
        Ext.getCmp('bottomtab').add({ image: 'Eustis', html: '<IFRAME src="images/Beecher Bay.jpg" width="1024" height="692" scrolling="none" frameborder="0"></IFRAME>' });
    }
    else if(record.get("project")=="Strathmore"){
        Ext.getCmp('bottomtab').removeAll();
        Ext.getCmp('bottomtab').add({ title: 'yo-images', autoScroll: 'true', html: '<IFRAME src="images/p-1.png" width="1024" height="768" scrolling="none" frameborder="0"></IFRAME>' });
    }



    if(record.get("project")=="Eustis"){
        Ext.getCmp('bottomtab').add({ image: 'Eustis', html: '<IFRAME src="images/Beecher Bay.jpg" width="1024" height="692" scrolling="none" frameborder="0"></IFRAME>' });
    }
    else if(record.get("project")=="Strathmore"){
        Ext.getCmp('bottomtab').removeAll();
        Ext.getCmp('bottomtab').add({ title: 'yo-images', autoScroll: 'true', html: '<IFRAME src="images/p-1.png" width="1024" height="768" scrolling="none" frameborder="0"></IFRAME>' });
    }

    else if(record.get("project")=="Mill Springs"){
        Ext.getCmp('bottomtab').removeAll();
        Ext.getCmp('bottomtab').add({ title: record.get("project"), autoScroll: 'true', html: '<IFRAME src="' + record.get("image") + '" width="' +
            record.get("width") + '" height="' + record.get("height") + '" scrolling="none" frameborder="0"></IFRAME>' });
    }




/*


 Beecher Bay.jpg  "footprint": "350 Sq. Ft.",  10k - 40 homes
 Cowan Point.jpg     "footprint": "720 Sq. Ft.",  20k - 90 homes
 Nanoose.jpg
 Snug Cove.jpg
 Kicking Horse.jpg   "footprint": "1800 Sq. Ft.",  80k - 400 homes


 Bay Point.jpg        "footprint": "1800 Sq. Ft.",  80k - 400 homes
 Pahrump     taylor.jpg        "footprint": "1800 Sq. Ft.",  80k - 400 homes

 Marco Shores.jpg        "footprint": "7000 Sq. Ft.",  300k - 1500 homes

 */
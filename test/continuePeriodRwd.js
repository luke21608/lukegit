var limit = 100000; //繳費金額上限
var sysDate = new Date();
sysDate.setHours(0);
sysDate.setMinutes(0);
sysDate.setSeconds(0);
sysDate.setMilliseconds(0);

$(document).ready(function(){

	doAjax("continueUnpaidsFp",{},compose); //呼叫PaymentPlatformAction服務
	
	$('#nextToPayWay').on('click', function(){ 
		var key = $('input:radio[name=policyNoRadio]:checked').val(); //取得保單號碼		
        if(key == undefined){//未選擇保單
        	showMessageBox("尚未選擇資料", "請選擇保單", "close");
        }else{
        	var checkedUL = $('input:radio[name="policyNoRadio"]:checked').closest("ul").get(0).id;  	
            var payDeadLineDate = $('#'+checkedUL+' input[id^=payDeadLine]').val();

            if ( sysDate.valueOf() > (Date.parse(payDeadLineDate)).valueOf() ){
            	showMessageBox("提醒", "您勾選的保單號碼，已超過繳費期限，請參閱繳費通知單的說明，造成不便，敬請見諒。", "close");      	
            }else{
            	//set checked policyNo information
            	$("#policyNo").val(key);
        		$("#insuredName").val($('#'+checkedUL+' li:nth-child(2) div:nth-child(2)').text());
        		$("#initPayment").val($("#p_").text());
        		$("#idn").val($('#'+checkedUL+' #idn').val());
        		$("#ownerName").val($('#'+checkedUL+' input[id^=ownerName]').val());
        		$("#payDeadLine").val($('#'+checkedUL+' input[id^=payDeadLine]').val());
        		$("#completeDate").val($('#'+checkedUL+' input[id^=completeDate]').val());
            	$("#payform").trigger("submit");
            }
        }
	});
	
	$("input[name='policyNoRadio']:radio").change(function(){
        var policyNoRadio = $('input:radio[name=policyNoRadio]:checked').val();//取得目前radio保單號碼
        policyClick(policyNoRadio);
		resetSum();
//	    checkSum();
	});
	    
	$( ':checkbox' ).on( "click", function() {
        var premiumThis = $(this).data('premium');//取得選取checkbox的保費
        var id = $(this).attr('id'); //選取checkbox的id date_policyNo_i
        var idList = id.split('_');
        var policyNo = idList[1];
        var dateIndex = idList[2];
        var isChecked = $(this).prop('checked'); //選取checkbox的狀態
        var count = 0;
        var key = $('input:radio[name=policyNoRadio]:checked').val();//取得目前radio保單號碼
       
        if(key != policyNo){ //檢查checkbox和radio是否同保單
            $("#" + policyNo).trigger("click");//點其他保單的話，取消當前的勾選，且全選新保單所有期別

            resetSum();
        	
        }else{
            if(dateIndex == 1 ){ //第0個鎖定 選第1個
                var premium0 = $("#date_" + policyNo + "_0").data('premium');
                if(!isChecked){ //取消
                  if($("#date_" + policyNo + "_2").prop('checked')){//檢查後面選項有沒有與狀態
                    $("#date_" + policyNo + "_2").prop('checked',false); //移除後面的選項
                    var premium2 = $("#date_" + policyNo + "_2").data('premium');
                    count = parseInt($("#p_").text())-parseInt(premiumThis)-parseInt(premium2); //扣後兩期的保費
                  }else{
                    count = parseInt($("#p_").text())-parseInt(premiumThis);//扣勾選的保費
                  }
                }else{//勾選
                  if($("#date_" + policyNo + "_0").prop('checked')){//檢查後面選項有沒有 與狀態
                    count = parseInt($("#p_").text())+parseInt(premiumThis);
                  }else{
                 	  $("#date_" + policyNo + "_0").prop('checked',true);
                    count = parseInt($("#p_").text())+parseInt(premium0)+parseInt(premiumThis);//加回勾選的保費
                  }
                }
              }else{ //如果選第2個項目
                 if(!isChecked){ //取消
                   count = parseInt($("#p_").text())-parseInt(premiumThis);//扣勾選的保費
                 }else{//勾選
              	 var premium1 = $("#date_" + policyNo + "_1").data('premium');
                   if($("#date_" + policyNo + "_1").prop('checked')){//檢查後面選項有沒有 與狀態
                  	 count = parseInt($("#p_").text())+parseInt(premiumThis);//加回勾選的保費
                   }else{
                  	 $("#date_" + policyNo + "_1").prop('checked',true);
                  	 count = parseInt($("#p_").text())+parseInt(premium1)+parseInt(premiumThis);//加回兩期的保費
                   }
                 }
              }
              $("#p_").html(count.toString());//塞值顯示
        }
        
//        checkSum();

    }); 

});


function compose(result){
//	var dataList = [	//hardcode 測試
//		{
//			"policyNumber" : "K100227851",
//			"insuredName" : "SIT1",
//			"productName" : "友邦人壽快意人生終身傷害保險",
//			"ownerTaxId" : "A123456789",
//			"ownerName" : "SIT11",
//			"payDeadLine" : "2019/02/21",
//			"completeDate" : "2019-01-02",
//		},           
//		{
//			"policyNumber" : "K100227999",
//			"insuredName" : "SIT2",
//			"productName" : "友邦人壽快意人生終身傷害保險",
//			"ownerTaxId" : "A123456789",
//			"ownerName" : "SIT12",
//			"payDeadLine" : "2019/02/21",
//			"completeDate" : "2019-01-02",
//		}
//		,
//		{
//			"policyNumber" : "K100227888",
//			"insuredName" : "SIT3",
//			"productName" : "友邦人壽快意人生終身傷害保險",
//			"ownerTaxId" : "A123456789",
//			"ownerName" : "SIT3",
//			"payDeadLine" : "2019/02/21",
//			"completeDate" : "2018-12-10",
//		}
//	];
//	var dateList = [ "2018年8月 $10000", "2018年9月 $80000", "2018年10月 $80000" ];
//	var dateListTest1 = [ "2018年8月 $8895", "2018年8月 $8895", "2018年8月 $8895" ];
//	var dateListTest2 = [ "2018年8月 $50500"];

	if(result.totalCount == 0){
		showMessageBox("查無資料","此繳費方式不適用於投資型保單及外幣保單，且僅提供自行繳費之有效保單進行繳費。<br>目前您沒有適用此繳費方式的保單，或者您沒有尚未繳費的有效保單。","backToMain");
	}
	var dataList = result.data;	//先檢查hardcode測試完這句要解註解
	var firstNo = "";
	var html = "";
	for(var i = 0 ; i < dataList.length; i++){
		var firstFlag = i == 0;
		var dataMap = dataList[i];
		var policyNo = dataMap.policyNumber;
		var ownerName = dataMap.ownerName;
		var ownerTaxId = dataMap.ownerTaxId;
		var insuredName = dataMap.insuredName;
		var planName = dataMap.productName;
		var payDeadLine = dataMap.payDeadLine;
		var completeDate = dataMap.completeDate;
		var dateList = dataMap.nextPremiumDate;	//先檢查hardcode測試完這句要解註解
		
		html += "<ul id='"+policyNo+"_UL'>";		
		html += getPolicyHtml(policyNo, firstFlag);
		html += getOtherHtml(1, insuredName, firstFlag);
		html += getOtherHtml(2, planName, firstFlag);
		html += getDateHtml(policyNo, dateList, firstFlag);
//		if(i==0)	//hardcode 測試
//			html += getDateHtml(policyNo, dateListTest1, firstFlag);
//		else if(i==1)
//			html += getDateHtml(policyNo, dateListTest2, firstFlag);
		html += getHiddenDateHtml(payDeadLine, completeDate, ownerName, ownerTaxId, i);

		html += "</ul>";
		
		if(firstFlag){
			firstNo = policyNo
			$("#owner").html(ownerName);
		}
	}
	$("#payList").html(html);
    
    policyClick(firstNo);//預設勾選最上方那筆保單
    resetSum();
//    checkSum();
}

function getPolicyHtml(policyNo, firstFlag){
	var check = firstFlag ? "checked" : "";
	return "<li class='red'><div><div class='inputbox_checkbox' >"+
//	"<input type='radio' id='"+policyNo+"' name='policyNoRadio' value='"+policyNo+"' "+check+" onclick=\"policyClick(\'"+policyNo+"\')\"/>"+
	"<input type='radio' id='"+policyNo+"' name='policyNoRadio' value='"+policyNo+"' "+check+"/>"+
	"<label for='"+policyNo+"' ><div class='radioDiv'><span class='radioTxt'>"+policyNo+"</span></div>"+
	"</label></div></div></li>";
}

function getOtherHtml(index, value, firstFlag){
	var title = (index == 1) ? "主被保險人" : "主契約名稱";
	var gray = firstFlag ? "gray" : "";
	return "<li class='_two _mpart3 "+gray+"'><div>"+title+"</div><div>"+value+"</div></li>";
}

function getDateHtml(policyNo, dateList, firstFlag){
	var check = firstFlag ? "checked" : "";
	var gray = firstFlag ? "gray" : "";
	var html = "<li class='"+gray+"'><div class='modify-right'>";
	for(var i = 0 ; i < dateList.length ; i++){
		var id = "date_" + policyNo + "_" + i;
//		html += "<label class='checkboxContent'><input type='checkbox' id="+id+" "+check+"><span>"+dateList[i]+"</span></label>";
		var premium = dateList[i].split("$");
		html += "<label class='checkboxContent'><input type='checkbox' id="+id+" "+check+" data-premium='"+premium[1]+"' >" +
				"<span>"+dateList[i]+"</span></label>";
	}
	html += "</div></li>";
	return html;
}

function getHiddenDateHtml(payDeadLine, completeDate, ownerName, ownerTaxId, i){
	return "<input type=hidden name='payDeadLine' id='payDeadLine_"+i+"' value="+payDeadLine+" />"+
		   "<input type=hidden name='completeDate' id='completeDate_"+i+"' value="+completeDate+" />"+
	       "<input type=hidden name='ownerName' id='ownerName_"+i+"' value="+ownerName+" />"+
	       "<input type=hidden name='idn' id='idn_"+i+"' value="+ownerTaxId+" />";
}

function policyClick(policyNo){
	var $uls = $("#payList ul");
	for(var i = 0 ; i < $uls.length ; i++){
		var $ul = $uls.eq(i);
		var $lis = $ul.find("li");
		var policyUlId = $ul[0].id;
		for(var j = 0 ; j < $lis.length ; j++){
			var $li = $lis.eq(j);
			var $labels = $li.find("label");
			if(!$li.hasClass("red")){
				if(policyUlId.indexOf(policyNo) >= 0){						
					$li.addClass("gray");
					
					if(j == $lis.length-1){
						var total_premium = 0;
						for(var k = 0 ; k < $labels.length ; k++){
							total_premium += parseInt($("#date_" + policyNo + "_" + k).data('premium'));
							//預設計算只能勾選總和10萬內的所有期別
							if(total_premium <= limit){
			                 	  $("#date_" + policyNo + "_" + k).prop('checked',true);
							}else{
			                 	  $("#date_" + policyNo + "_" + k).prop('checked',false);
							}
						}
					}
					
					//預設最少勾選第一筆期別不能取消
					$("#date_" + policyNo + "_0").prop('checked',true);
					$("#date_" + policyNo + "_0").prop("disabled", true);
					
				} else {	
					$li.removeClass("gray");
					$li.find("input[type=checkbox]").prop("checked", false);
					$li.find('input:checkbox:first').prop("disabled", false);
				}
			}
		}
	}
}

//依據勾選期別，重算應繳金額
function resetSum() {
	 var sum = 0;
	 $("#p_").html(sum);
	 $('input:checkbox:checked').each(function(){ 
		sum += parseInt($(this).data('premium'));
	 }); 		
	 $("#p_").html(sum);
}

//繳費金額上限
//function checkSum() {
//	 if(parseInt($("#p_").text()) > limit){
//		 $("#nextToPayWay").hide();
//		 showMessageBox("提醒", "超商代收金額以新台幣2萬元為限，您所繳保費總額已超過新台幣2萬元，請參閱繳費通知單上的其他繳費方式，造成不便、敬請見諒。", "close");
//		 $("#stopToPayWay").show();
//	 }else{
//		 $("#nextToPayWay").show();
//		 $("#stopToPayWay").hide(); 
//	 }
//}
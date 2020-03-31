<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/page/common/common2.jsp"%>

<head>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/paymentPlatform/continuePeriodRwd.js"></script>
<script type="text/javascript">
// 	var noUnpaids = "${noUnpaids}";
</script>
</head>
<div class="maincontainer">
	<header></header>
	<div class="page_tab">
		<div class="_inner">
			<div class="taballboxmask"></div>
			<p>
			<p>
			<p>
			<p>繳費平台</p>
		</div> 
	</div>


	<div class="container2">
		<div class="_inner">
			<%@include file="PaymentInfo.jsp"%>
				<div class="protector_infolist2" id="payList"></div>
                <div class="protector_infolist2">
                	<ul>
                		<li class="gray text_black JQ-hiddenAll JQ-show_">
                			<div>應繳金額　新台幣 <span id="p_"></span> 元</div>
                		</li>
                	</ul>
                </div>
          
  <!-- ##################### 以下為舊版 ########################## -->
                
                
<!-- 			<div class="protector_infolist2" id="payList"> -->
<!-- 			        <ul> -->
<!-- 			          <li class="red _three title"> -->
<!-- 			            <div>保單號碼</div> -->
<!-- 			            <div>主被保險人</div> -->
<!-- 			            <div>主契約名稱</div> -->
<!-- 			          </li> -->
<%-- 						<s:iterator value="unpaidVOs"  status="payList"> --%>
<!-- 				            <li class="_three"> -->
<!-- 					          	<div class="inputbox_checkbox"> -->
<!-- 								 <input type="radio" id="pay_1"  value="K100227851" checked/> -->
<!-- 					 				<label for="pay_1" > -->
<!-- 					                    <div class="radioDiv"> -->
<%-- 					                      <span class="radioTxt">K100227851</span> --%>
<!-- 					                    </div> -->
<!-- 				                    </label> -->
<!-- 								</div> -->
<!-- 								 <div>王仁傑</div> -->
<!-- 			                    <div>友邦人壽快意人生終身傷害保險</div> -->
<!-- 				            </li> -->
<!-- 					          <li class="gray JQ-hiddenAll JQ-show_"  > -->
<!-- 					          	<div class="modify-right"> -->
<%-- 									<s:iterator value="nextPremiumDate" status="date"> --%>
<%-- 						                <s:if test="nextPremiumDate.size()==1"> --%>
<%-- 						                  <s:property /> --%>
<%-- 						                </s:if><s:else> --%>
<!-- 						                  <input type="checkbox"  -->
<%-- 						                         id="<s:property value='policyNumber'/>_<s:property value='#date.index'/>"  --%>
<!-- 						                         name="date"  -->
<%-- 						                         value="<s:property />" --%>
<%-- 						                         data-index="<s:property value='#date.index'/>" --%>
<%-- 						                         data-policy-no="<s:property value='policyNumber'/>" --%>
<!-- 						                         checked -->
<!-- 						                         <s:if test="#date.index==0">checked disabled</s:if> > -->
<%-- 						                  <label class="css-radiolabel" for="<s:property value='policyNumber'/>_<s:property value='#date.index'/>"><s:property /></label> --%>
<%-- 						                </s:else> --%>
<%-- 					                 </s:iterator> --%>
<!-- 								</div> -->
<!-- 					          </li> -->
<!-- 					       <li class="_three"> -->
<!-- 					          	<div class="inputbox_checkbox"> -->
<!-- 								 <input type="radio" id="pay_2" name="policyNoRadio" value="K100227851" /> -->
<!-- 					 				<label for="pay_2" > -->
<!-- 					                    <div class="radioDiv"> -->
<%-- 					                      <span class="radioTxt">K100227999</span> --%>
<!-- 					                    </div> -->
<!-- 				                    </label> -->
<!-- 								</div> -->
<!-- 								 <div>王仁傑</div> -->
<!-- 			                    <div>友邦人壽快意人生終身傷害保險</div> -->
<!-- 				            </li> -->
<!-- 					          <li class="gray JQ-hiddenAll JQ-show_"  > -->
<!-- 					          	<div class="modify-right"> -->
<!-- 					          		<label class="checkboxContent"> -->
<%-- 										<input type="checkbox" id="checkbox1" checked><span>2018年8月-$1000</span> --%>
<!-- 									</label> -->
<!-- 									<label class="checkboxContent"> -->
<%-- 										<input type="checkbox" id="checkbox2" checked><span>2018年9月-$1000</span> --%>
<!-- 									</label> -->
<!-- 									<label class="checkboxContent"> -->
<%-- 										<input type="checkbox" id="checkbox2" checked><span>2018年10月-$1000</span> --%>
<!-- 									</label> -->
<!-- 								</div> -->
<!-- 					          </li> -->
<%-- 			              <li class="gray text_r JQ-hiddenAll JQ-show_<s:property value='policyNumber'/>"  > --%>
<%-- 				            <div class="payntli">應繳金額　新台幣 <span id="p_<s:property value='policyNumber'/>">1234</span> 元</div> --%>
<!-- 				          </li> -->
<%-- 				          <form id="form<s:property value='policyNumber'/>" name="form<s:property value='policyNumber'/>" method="POST" action="${pageContext.request.contextPath}/payModeFp"> --%>
<%-- 			              <s:hidden  name="policyNo" value="%{policyNumber}"  /> --%>
<%-- 			              <s:hidden name="insuredName" />  --%>
<%-- 			              <s:hidden name="productName" />  --%>
<%-- 			              <input  name="initPayment" type="hidden" value="<s:property value='premium'/>" id="premium_<s:property value='policyNumber'/>" /> --%>
<%-- 			              <s:hidden  name="idn" value="%{ownerTaxId}"  /> --%>
<%-- 			              <s:hidden name="ownerName" /> --%>
<%-- 			              <s:hidden name="kind" /> --%>
<%-- 			              <s:hidden  name="completeDate"   /> --%>
			              
<!-- 			            </form> -->
<%-- 			           </s:iterator> --%>
<!-- 			        </ul> -->
				<div class="aboutnote">
					<span>注意事項：</span>
					<ul class="aboutnote_inner">
					    <li>僅提供您為要保人且繳費方式為＂自行繳費＂之有效保單進行繳費。(不適用投資型及外幣保單)</li>
					    <li>於代收機構完成繳費後，本公司需2個工作天後才能收到您繳納的金額，請勿在2個工作天內重覆繳費。</li>
					    <li>本公司依法授權代收機構僅可於繳費通知上所載之繳費期間及繳費金額收取保費，未經本公司授權表示任何意見及提供保險相關服務；保單內容說明及相關服務，請洽詢業務員或本公司客服專線0800-012-666。</li>
					    <li>我們將在您繳費後20日內寄發本公司收據，如逾期未收到，請聯繫客服專線0800-012-666。 尚未收到本公司收據前，請保留原繳費之憑證。</li>
					    <li>上列保單資訊可能在您辦理契約變更、申請理賠及變更繳費方式後而有不同，若您對上述內容有任何疑問，請洽本公司客服專線0800-012-666。</li>
					</ul>
				</div>
<!-- 				<div class="btn red" id="nextToPayWay"> -->
				<form id="payform" name="payform" method="POST" action="${pageContext.request.contextPath}/payModeContinueFp">
	                <div class="btn red"  id="nextToPayWay"><a>下一步</a></div>
					<input type=hidden name="payDeadLine" id="payDeadLine"  />
	                <input type=hidden name="completeDate" id="completeDate"  />
					<input type=hidden name="initPayment" id="initPayment"  />
					<input type=hidden name="insuredName" id="insuredName"  />
					<input type=hidden name="ownerName"   id="ownerName" />
					<input type=hidden name="kind" value="${kind}"  id="kind" />
					<input type=hidden name="policyNo" id="policyNo" value="<s:property value='policyNo'/>" />
					<input type=hidden name="idn" id="idn" value="<s:property value='idn'/>"  />
                </form>
<!-- 			</div> -->
			
<%-- 			<div class="aboutnote"  id="stopToPayWay"><span>依照您勾選的繳納期數，總額已經超過新台幣10萬元，請參閱繳費通知單上的繳費方式。造成不便，敬請見諒。</span></div> --%>

		</div>
	</div>
</div>
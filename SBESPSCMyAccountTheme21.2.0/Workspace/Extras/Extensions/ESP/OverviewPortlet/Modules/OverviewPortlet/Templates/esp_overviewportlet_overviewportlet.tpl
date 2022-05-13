
<article class="overview-portlet">
	<!-- <div class="overview-portlet-header">
		<h4>{{translate 'Quick Links'}}</h4>
	</div> -->
	<section class="overview-portlet-card">
		<div class="overview-portlet-card-content">
      <p class="overview-portlet-outstanding-balance-header">{{translate 'Outstanding Balance'}}</p>
      <p class="overview-portlet-outstanding-balance">{{outstandingbalance}}</p>
    <div class="overview-portlet-card-button-make-payment-container">
			<a class="overview-portlet-card-button-edit" href="/invoices">{{translate 'Make Payment'}}</a>
		</div>
    <div class="overview-portlet-card-button-orders-container">
			<a class="overview-portlet-card-button-edit" href="/open-purchases">{{translate 'Outstanding Orders'}}</a>
		</div>
    <div class="overview-portlet-card-button-cases-container">
			<a class="overview-portlet-card-button-edit" href="/cases">{{translate 'Open Cases'}}</a>
		</div>
    <div class="overview-portlet-card-button-estimates-container">
			<a class="overview-portlet-card-button-edit" href="/quotes">{{translate 'Open Estimates'}}</a>
		</div>
		</div>
		
	</section>
</article>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
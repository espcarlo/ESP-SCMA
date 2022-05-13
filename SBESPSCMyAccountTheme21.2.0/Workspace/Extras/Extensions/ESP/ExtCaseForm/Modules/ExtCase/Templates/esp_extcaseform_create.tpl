<div class="alert-placeholder" data-type="alert-placeholder"></div>
<form class="case-form">
    <fieldset>
        <div class="case-form-control-group" data-validation="control-group">
            <label for="title">{{translate 'Subject <small class="case-new-form-required">*</small>'}}</label>
            <div data-validation="control">
                <input class="case-form-input" type="text" name="title" id="title" value="">
            </div>
        </div>

        <div data-validation="control-group">
            <label for="product">{{translate 'Product <small class="case-new-form-required">*</small>'}}</label>
            <div data-validation="control">
                 <select class="case-form-select" name="product" id="product" data-action="product">
                   <option value="" selected>--Select--</option>
                    {{#each productFieldOptions}}
                        <option value="{{this.value}}">{{this.text}}</option>
                    {{/each}}
               
                </select>
               
            </div>
        </div>
          <div data-view="ModuleView" class="case-form-control-group" data-validation="control-group">
            
        </div>
          <div class="case-form-control-group" data-validation="control-group">
            <label for="category">{{translate 'Case Type <small class="case-new-form-required">*</small>'}}</label>
            <div data-validation="control">
                
                <select class="case-form-select" name="category" id="category" data-action="category">
                   <option value="" selected>--Select--</option>
                    {{#each caseTypeFieldOPtions}}
                        <option value="{{this.value}}">{{this.text}}</option>
                    {{/each}}
               
                </select>
            </div>
        </div>
        <div class="case-form-control-group" data-validation="control-group">
            <label for="priority">{{translate 'Priority <small class="case-new-form-required">*</small>'}}</label>
            <div data-validation="control">
                
               <select class="case-form-select" name="priority" id="priority" data-action="priority">
                   {{!-- <option value="">--Select--</option> --}}
                    {{#each priorityFieldOptions}}
                        <option value="{{this.value}}" {{#ifEquals @index 0}}selected{{/ifEquals}}>{{this.text}}</option>
                    {{/each}}
               
                </select>
            </div>
        </div>
        <div class="case-form-control-group" data-validation="control-group">
			<label  class="case-new-form-label" for="message">
				{{translate 'Message <small class="case-new-form-required">*</small>'}}
			</label>
			<div class="case-new-form-controls" data-validation="control">
				<textarea name="message" id="message" class="case-new-form-textarea"></textarea>
			</div>
		</div>
    </fieldset>
    <div class="user-preferences-form-control-group">
        <button class="case-form-submit" type="submit">{{translate 'Submit'}}</button>
    </div>
    
</form>
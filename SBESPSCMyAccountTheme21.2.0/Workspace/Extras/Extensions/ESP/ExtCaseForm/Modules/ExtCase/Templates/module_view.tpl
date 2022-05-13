<label for="module">{{translate 'Module <small class="case-new-form-required">*</small>'}}</label>
<div data-validation="control">
    
    <select class="case-form-select" name="module" id="module" data-action="module">
        {{#if hasModule}}
            <option value="" selected>--Select--</option>
        {{#each moduleoptions}}
            <option value="{{this.value}}">{{this.text}}</option>
        {{/each}}
        {{else}}
             <option value="">--Select Product First--</option>
        {{/if}}
    </select>
</div>
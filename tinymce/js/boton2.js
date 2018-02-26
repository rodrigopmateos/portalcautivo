tinymce.init({
  selector: '#boton2',
  branding: false,
  resize: false,
  toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | link image | print preview media fullpage | forecolor backcolor emoticons | code | mybutton",
  plugins: 'wordcount',
  menubar: false,
 
  setup: function (editor) {
    editor.addButton('mybutton', {
      text: 'My button',
      icon: false,
      onclick: function () {
        editor.insertContent('&nbsp; <input type="button" value="boton"/> &nbsp;');
      }
    });
  }
});
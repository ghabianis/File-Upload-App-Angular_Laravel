import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Post } from './post.model';
import { FormControl } from '@material-ui/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'front';
   files: any;
   submitted = false
   form!: FormGroup;
   post = new Post();
   data:any
   constructor(private formBuilder:FormBuilder,private service:PostService){

  }

  createForm (){
      this.form  = this.formBuilder.group({
      image: [null, Validators.required]
    });
  }
  ngOnInit() : void {
      this.createForm();
      this.getImage();
  }

  get f(){
   return this.form?.controls;
  }

  uploadImage(event:any){
    this.files = event.target.files[0];
    console.log(this.files);
  }

  onSubmit(){
   this.submitted = true;

   if(this.form.invalid){
     return;
   }
      const formData = new FormData();
      formData.append("image",this.files,this.files.name);

      this.service.postImage(formData).subscribe((e)=>{
        this.data = e;
        console.log(e);
      })
  }
  getImage(){
    this.service.getImage().subscribe((e)=>{
       this.data=e;
       console.log(this.data);
    })
  }

}

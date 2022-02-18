<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class fileController extends Controller
{
     public function file(Request $request){
         $post = new Post;

         //check if request have type of file
         if($request->hasFile('image')){
           $completeName = $request->file('image')->getClientOriginalName();
           $fileNameOnly = pathinfo($completeName, PATHINFO_FILENAME);
           $extension = $request->file('image')->getClientOriginalExtension();
           $completeImage = str_replace(' ','_',$fileNameOnly).'-'.rand().'_'.time().$extension;
           $path = $request->file('image')->storeAs('public/posts',$completeImage);
           $post->image  = $completeImage;
        }

        if($post->save()){
            return ['status'=>true , 'message'=>'image saved Successfully'];
        }else{
            return ['status'=>false , 'error'=>'Error while saving image'];
        }
     }


    public function getfile(Request $request) {
        $image = Post::all();
        if (!$image){
            return response()->json(["error" => "Error while getting data"]);
        }else
        return response()->json($image , 200);
    }
}
// dd => dump and die

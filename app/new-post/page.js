
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';
import { useFormState } from "react-dom";

export default function NewPostPage() {

  async function createPost(formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let error = [];

    if (!title || title.trim().length === 0) error.push("Title is required");
    if (!image || image.trim().length === 0) error.push("Image is required");
    if (!content || content.trim().length === 0) error.push("Content is required");

    if (error.length > 0) return { error }; 

    storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    })


    redirect('/feed');
  }

  
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent {
  private file?: File;
  fileName: string = '';
  title: string = '';
  //images$?: Observable<BlogImage[]>;

  constructor(private imageService: ImageService) {

  }
  uploadImage(): void {
    if (this.file && this.fileName !== '' && this.title !== '') {
      // Image service to upload the image
      this.imageService.uploadImage(this.file, this.fileName, this.title)
      .subscribe({
        next: (response) => {
          console.log(response)
          
        }
      });
    }
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }
}

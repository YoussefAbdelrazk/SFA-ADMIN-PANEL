import { VideoUploadHeader } from '@/components/Videos/Header';
import { VideoUploadForm } from '@/components/Videos/UploadForm';

export default function AddVideo() {
  return (
    <div className='arabic-text'>
      {/* Header Section */}
      <VideoUploadHeader />

      {/* Form Section */}
      <VideoUploadForm />
    </div>
  );
}

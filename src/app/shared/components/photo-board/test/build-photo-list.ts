import { Photo } from '../interface/photo'

export function buildPhotosList(): Photo[] {
  const photos: Photo[] = []

  for (let index = 0; index < 8; index++) {
    photos.push({ id: index+1, description: '', url: ''})
  }

  return photos
}

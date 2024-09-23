import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './GalleryForm.css'; // Add some styles for the form

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Gallery name is required'),
  location: yup.string(),
  description: yup.string(),
  artwork_ids: yup.string().required('Artwork IDs are required'),
  organiser_id: yup.number().required('Organiser ID is required').typeError('Organiser ID must be a number'),
});

const GalleryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here (e.g., send data to the backend)
  };

  return (
    <div className="gallery-form-container">
      <h2>Create Gallery</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Gallery Name</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Location */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            {...register('location')}
          />
          {errors.location && <p className="error-message">{errors.location.message}</p>}
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register('description')}
            className={errors.description ? 'input-error' : ''}
          />
          {errors.description && <p className="error-message">{errors.description.message}</p>}
        </div>

        {/* Artwork IDs */}
        <div className="form-group">
          <label htmlFor="artwork_ids">Artwork IDs (comma-separated)</label>
          <input
            id="artwork_ids"
            type="text"
            {...register('artwork_ids')}
            className={errors.artwork_ids ? 'input-error' : ''}
          />
          {errors.artwork_ids && <p className="error-message">{errors.artwork_ids.message}</p>}
        </div>

        {/* Organiser ID */}
        <div className="form-group">
          <label htmlFor="organiser_id">Organiser ID</label>
          <input
            id="organiser_id"
            type="number"
            {...register('organiser_id')}
            className={errors.organiser_id ? 'input-error' : ''}
          />
          {errors.organiser_id && <p className="error-message">{errors.organiser_id.message}</p>}
        </div>

        <button type="submit">Create Gallery</button>
      </form>
    </div>
  );
};

export default GalleryForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation Schema using Yup
const eventSchema = yup.object().shape({
  event_name: yup.string().required('Event name is required').max(255, 'Event name cannot exceed 255 characters'),
  description: yup.string(),
  organiser_id: yup.number().required('Organizer ID is required').positive('Organizer ID must be positive').integer(),
  event_start_date: yup.date().required('Start date is required').typeError('Start date must be a valid date'),
  event_end_date: yup.date().required('End date is required').min(
    yup.ref('event_start_date'),
    'End date cannot be before start date'
  ).typeError('End date must be a valid date'),
  location: yup.string().max(255, 'Location cannot exceed 255 characters'),
  registration_form_link: yup.string().url('Must be a valid URL'),
  link_end_date: yup.date().min(
    yup.ref('event_end_date'),
    'Link end date cannot be before event end date'
  ).typeError('Link end date must be a valid date'),
});

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eventSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (send data to API, etc.)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Event Name</label>
        <input type="text" {...register('event_name')} />
        {errors.event_name && <p>{errors.event_name.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea {...register('description')} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Organizer ID</label>
        <input type="number" {...register('organiser_id')} />
        {errors.organiser_id && <p>{errors.organiser_id.message}</p>}
      </div>

      <div>
        <label>Event Start Date</label>
        <input type="date" {...register('event_start_date')} />
        {errors.event_start_date && <p>{errors.event_start_date.message}</p>}
      </div>

      <div>
        <label>Event End Date</label>
        <input type="date" {...register('event_end_date')} />
        {errors.event_end_date && <p>{errors.event_end_date.message}</p>}
      </div>

      <div>
        <label>Location</label>
        <input type="text" {...register('location')} />
        {errors.location && <p>{errors.location.message}</p>}
      </div>

      <div>
        <label>Registration Form Link</label>
        <input type="url" {...register('registration_form_link')} />
        {errors.registration_form_link && <p>{errors.registration_form_link.message}</p>}
      </div>

      <div>
        <label>Link End Date</label>
        <input type="date" {...register('link_end_date')} />
        {errors.link_end_date && <p>{errors.link_end_date.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;

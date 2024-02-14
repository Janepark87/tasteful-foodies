'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/MealImagePicker.module.css';
import Image from 'next/image';

export default function MealImagePicker({ label, name, error }) {
	const imgInput = useRef();
	const [previewImage, setPreviewImage] = useState();

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (!file) {
			setPreviewImage(null);
			return;
		}

		setPreviewImage(URL.createObjectURL(file));
	};

	useEffect(() => {
		// Clean up the object URL when the component unmounts
		return () => {
			if (previewImage) URL.revokeObjectURL(previewImage);
		};
	}, [previewImage]);

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>

			<div className={styles.controls}>
				<div className={styles.preview}>
					{previewImage ? <Image src={previewImage} alt="The image selected by the user." fill priority /> : <p>No image picked yet.</p>}
				</div>

				<input type="file" ref={imgInput} id={name} name={name} accept="image/png, image/jpeg" className={styles.input} onChange={handleImageChange} />

				<button type="button" className={styles.button} onClick={() => imgInput.current.click()}>
					Pick an image
				</button>
			</div>
			{error && <small className={styles['error']}>{error}</small>}
		</div>
	);
}

'use client';

import { useState } from 'react';
import ProfileEditModal from './ProfileEditModal';

export default function ProfileEditButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="ml-auto w-44 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
        onClick={() => setIsModalOpen(true)}
      >
        프로필 수정
      </button>
      {isModalOpen && <ProfileEditModal onClose={() => setIsModalOpen(false)}/>}
    </>
  );
}
import { useState } from 'react';

import UserBasicInfoForm from './UserBasicInfoForm';
import UserEditActions from './UserEditActions';
import UserEditHeader from './UserEditHeader';
import UserSecurityForm from './UserSecurityForm';
import UserSettingsForm from './UserSettingsForm';

const roleOptions = [
  { value: 'student', label: 'دانشجو' },
  { value: 'teacher', label: 'مدرس' },
  { value: 'admin', label: 'مدیر' },
];

const statusOptions = [
  { value: 'active', label: 'فعال' },
  { value: 'inactive', label: 'غیرفعال' },
  { value: 'banned', label: 'مسدود' },
];

const mockUser = {
  id: 2,
  name: 'مریم احمدی',
  email: 'maryam.a@example.com',
  mobile: '09351112233',
  role: 'teacher',
  status: 'active',
  bio: 'مدرس پایتون و جنگو با ۸ سال سابقه تدریس و توسعه وب.',
  avatar: 'م',
  avatarUrl: null,
  joined_at: '۱۴۰۳/۰۲/۰۵',
  last_login: '۱۴۰۳/۰۵/۱۲ · ۱۰:۲۵',
  courses_count: 6,
  certificates_count: 2,
  is_verified: true,
  has_support_access: true,
};

export default function PanelAdminUserEdit() {
  const [form, setForm] = useState({
    name: mockUser.name,
    email: mockUser.email,
    mobile: mockUser.mobile,
    role: mockUser.role,
    status: mockUser.status,
    bio: mockUser.bio,
    avatar: null,
    is_verified: mockUser.is_verified,
    has_support_access: mockUser.has_support_access,
  });
  const [avatarName, setAvatarName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const canSubmit =
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    form.mobile.trim() !== '';

  const passwordsMismatch =
    password !== '' && confirmPassword !== '' && password !== confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit || passwordsMismatch) return;
    const payload = { ...form };
    if (password) payload.password = password;
    console.log('Update user payload:', payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserEditHeader user={mockUser} />

      <UserBasicInfoForm
        form={form}
        setForm={setForm}
        roleOptions={roleOptions}
      />

      <UserSecurityForm
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        passwordsMismatch={passwordsMismatch}
      />

      <UserSettingsForm
        form={form}
        setForm={setForm}
        avatarName={avatarName}
        setAvatarName={setAvatarName}
        statusOptions={statusOptions}
      />

      <UserEditActions
        canSubmit={canSubmit}
        passwordsMismatch={passwordsMismatch}
      />
    </form>
  );
}

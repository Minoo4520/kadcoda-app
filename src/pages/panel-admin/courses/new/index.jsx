import { useState } from 'react';

import { Link } from 'react-router';

import AddChapterForm from './AddChapterForm';
import ChapterList from './ChapterList';
import CourseInfoForm from './CourseInfoForm';
import CourseStepper from './CourseStepper';
import CourseSuccessBanner from './CourseSuccessBanner';

export default function PanelAdminCourseCreate() {
  const [step, setStep] = useState('course');
  const [courseId, setCourseId] = useState(null);
  const [courseTitle, setCourseTitle] = useState('');

  const [chapters, setChapters] = useState([]);
  const [openChapter, setOpenChapter] = useState(null);
  const [episodeForm, setEpisodeForm] = useState({
    title: '',
    duration: '',
    video: null,
    is_free: false,
  });
  const [episodeVideoName, setEpisodeVideoName] = useState('');

  const handleCourseSubmit = (form) => {
    setCourseId(Math.floor(Math.random() * 9000) + 1000);
    setCourseTitle(form.title);
    setStep('content');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addChapter = (title) => {
    setChapters((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        sort_order: prev.length + 1,
        episodes: [],
      },
    ]);
  };

  const addEpisode = (chapterId) => {
    if (!episodeForm.title.trim()) return;
    setChapters((prev) =>
      prev.map((ch) => {
        if (ch.id !== chapterId) return ch;
        return {
          ...ch,
          episodes: [
            ...ch.episodes,
            {
              id: Date.now(),
              title: episodeForm.title.trim(),
              duration: episodeForm.duration.trim(),
              video: episodeForm.video,
              is_free: episodeForm.is_free,
              sort_order: ch.episodes.length + 1,
            },
          ],
        };
      }),
    );
    setEpisodeForm({ title: '', duration: '', video: null, is_free: false });
    setEpisodeVideoName('');
    setOpenChapter(null);
  };

  const handleOpenChapter = (id) => {
    if (openChapter === id) {
      setOpenChapter(null);
    } else {
      setOpenChapter(id);
      setEpisodeForm({ title: '', duration: '', video: null, is_free: false });
      setEpisodeVideoName('');
    }
  };

  return (
    <>
      <CourseStepper step={step} />

      {step === 'course' && <CourseInfoForm onSubmit={handleCourseSubmit} />}

      {step === 'content' && (
        <>
          <CourseSuccessBanner courseId={courseId} courseTitle={courseTitle} />

          <AddChapterForm nextOrder={chapters.length + 1} onAdd={addChapter} />

          <ChapterList
            chapters={chapters}
            openChapter={openChapter}
            onToggleChapter={handleOpenChapter}
            episodeForm={episodeForm}
            setEpisodeForm={setEpisodeForm}
            episodeVideoName={episodeVideoName}
            setEpisodeVideoName={setEpisodeVideoName}
            onAddEpisode={addEpisode}
          />

          <div className="mt-25 flex flex-col-reverse gap-12 sm:flex-row sm:justify-end">
            <Link
              to="/panel/admin/courses"
              className="rounded-xl bg-[#EDF1F8] px-20 py-12 text-center text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
            >
              بازگشت به لیست دوره‌ها
            </Link>
            <button
              type="button"
              className="to-primary-600 cursor-pointer rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-12 text-[11px] font-black text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110"
            >
              پایان و ذخیره دوره
            </button>
          </div>
        </>
      )}
    </>
  );
}

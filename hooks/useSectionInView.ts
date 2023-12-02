import { useActiveSectionContext } from '@/context/active-section-context';
import { SectionName } from '@/types/CommonTypes';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  let newThreshold = threshold;

  const query = `(max-width: 640px)`;
  if (typeof window !== 'undefined' && window.matchMedia(query).matches) {
    newThreshold = 0.3;
  }

  const { ref, inView } = useInView({
    threshold: newThreshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

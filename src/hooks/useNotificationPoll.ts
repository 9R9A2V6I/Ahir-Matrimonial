// hooks/useNotificationPoll.ts
import { useEffect, useRef } from 'react';

export const useNotificationPoll = (
  userId: string,
  onNotification: (messages: string[]) => void
) => {
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const poll = async () => {
    try {
      const res = await fetch(`http://localhost:8000/notifications/poll?user_id=4`);
      const data = await res.json();
      if (data.notifications.length > 0) {
        onNotification(data.notifications.map((n: any) => n.message));
      }
    } catch (error) {
      console.error('Polling error:', error);
    } finally {
      pollingRef.current = setTimeout(poll, 5000);
    }
  };

  useEffect(() => {
    poll();
    return () => {
      if (pollingRef.current) clearTimeout(pollingRef.current);
    };
  }, [userId]);
};

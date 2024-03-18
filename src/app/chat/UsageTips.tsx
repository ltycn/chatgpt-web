import { useEffect, useState } from 'react';

import { useTranslation } from '../i18n';

export function UsageTips() {
  const { language } = useTranslation();
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    setTips(
      language?.toLowerCase()?.includes('zh')
        ? [
            '❤️ 此网站仅供内部使用，请勿share给组织之外的人员',
            '⚠️ 上网不涉密，涉密不上网。请勿🚫将任何敏感信息提交到此网站',
            '❔ 使用中有任何疑问，点击左下角Teams图标，或联系liuty24',
            '🔥 for Platform Enablement Team'
          ]
        : [
            'This website is for internal use only. Please do not share it with individuals outside the organization.',
            'Please do not submit any sensitive information on this website.',
            'If you have any questions, click on the Teams icon to contact us.',
          ],
    );
  }, [language]);

  return (
    <>
      {tips.map((item) => {
        return (
          <div key={item} className="flex flex-row text-[13px] text-gray-400 space-x-1">
            <div className="font-bold">•</div>
            <div>{item}</div>
          </div>
        );
      })}
    </>
  );
}

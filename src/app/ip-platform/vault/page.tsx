import IpVaultViewer from '@/components/ip-platform/IpVaultViewer';
import { home } from '@/lib/homePageStyle';

export default function IpVaultPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] pt-28 pb-12 sm:pt-32">
      <div className={home.container}>
        <div className="mb-8">
          <p className={home.eyebrow}>Confidential</p>
          <h1 className={`mt-2 ${home.h2}`}>
            IP <span className={home.accentGold}>Vault</span>
          </h1>
          <p className={`mt-3 ${home.bodyMuted}`}>Authorized viewing only. Do not share or distribute.</p>
        </div>
        <IpVaultViewer />
      </div>
    </div>
  );
}

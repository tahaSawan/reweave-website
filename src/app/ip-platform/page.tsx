import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import PageHeroSection from '@/components/PageHeroSection';
import IpPlatformGate from '@/components/ip-platform/IpPlatformGate';
import { IP_VAULT_COOKIE, verifySessionToken } from '@/lib/ipVaultSession';
import { home } from '@/lib/homePageStyle';

const sectionDivider = (
  <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent" aria-hidden />
);

export default async function IpPlatformPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(IP_VAULT_COOKIE)?.value;
  if (await verifySessionToken(token)) {
    redirect('/ip-platform/vault');
  }

  return (
    <>
      <PageHeroSection
        eyebrow="Confidential · Invite only"
        title={
          <>
            The Sovereign <span className={`font-semibold ${home.accentGold}`}>IP Vault</span>
          </>
        }
        subtitle="Protected materials for qualified partners and strategic stakeholders"
        lead="This secure environment hosts RE:WEAVE™ confidential decks, technical IP, and partnership materials. Access is limited to invited parties with a valid code and accepted confidentiality terms."
      />

      {sectionDivider}

      <IpPlatformGate />
    </>
  );
}

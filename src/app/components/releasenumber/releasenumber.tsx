export function ReleaseNumber({ releaseNumber }: { releaseNumber?: number }) {
    return <div className="border border-black h-fit">hm{String(releaseNumber).padStart(3, '0')}</div>
}
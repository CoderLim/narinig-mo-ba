import { Link } from '@/core/i18n/navigation';

export function HomeGuideTl() {
  return (
    <section className="px-4 py-20 sm:py-28" aria-labelledby="guide-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="space-y-5">
            <p className="text-accent-foreground/80 text-xs tracking-[0.2em] uppercase">
              Narinig Mo Ba game guide
            </p>
            <h2
              id="guide-heading"
              className="font-serif text-3xl tracking-tight sm:text-4xl"
            >
              Mas malalim na tingin sa kuwento, setting, creators, at mga version
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Gumagana ang Narinig Mo Ba dahil ginagawa nitong daan papunta sa horror
              ang isang ordinaryong neighborhood routine. Hindi ka agad inilalagay sa
              haunted house o binibigyan ng detective mission. Nagsisimula ka sa likod
              ng counter ng isang Filipino sari-sari store, nagsisilbi sa mga taong may
              normal na dahilan para dumaan. Unti-unting lumalakas ang tension sa maliliit
              na request, paulit-ulit na pangalan, bitin na conversation, at chismis na
              nagkakaroon ng mas mabigat na kahulugan habang nagpapatuloy ang shift.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Mas madaling maintindihan ang game kapag itinuring mo ang store work at
              story bilang iisang system. Ang pagkuha ng produkto, pag-check ng presyo,
              pagsukli, at pakikinig sa customer ay hindi filler. Sila ang rhythm na
              ginagamit ng game para dahan-dahang ibigay ang plot. Kapag minadali mo ang
              dialogue para lang matapos ang order, madaling ma-miss ang detalye na
              magiging mahalaga sa mga susunod na scene.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              Bakit mahalaga ang sari-sari store setting
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Ang sari-sari store ay hindi lang lugar para bumili ng maliit na
              pang-araw-araw na produkto. Sa maraming neighborhood, natural din itong
              meeting point: may dumadating, naghihintay, nagtatanong, nagkukuwento, at
              inuulit ang narinig mula sa iba. Ginagamit ng Narinig Mo Ba ang pamilyar
              na setting na ito para gawing unstable ang information mismo.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Sakto rin ang title sa structure. Ang “Narinig mo ba?” ay karaniwang
              panimula sa rumor o chismis. Sa game, nagiging horror device ang simpleng
              tanong dahil ang makarinig ay hindi katumbas ng makaalam ng buong
              katotohanan. Puwedeng tama, exaggerated, incomplete, o misunderstood ang
              isang kuwento, at kailangan mong alalahanin ang fragments habang
              lumalalim ang story.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Sa official itch.io listing, naka-classify ang Narinig Mo Ba bilang Visual
              Novel at may tags na Horror, Filipino, Short, Working Simulator,
              storygame, 2D, Cute, at No AI. Lalo nang mahalaga ang Cute at Horror na
              kombinasyon: ang warm at friendly na shop ang nagse-set ng baseline para
              mas malakas ang discomfort kapag nagbago na ang atmosphere.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              Mula four-day game jam project hanggang viral Filipino horror game
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Nagsimula ang Narinig Mo Ba bilang entry sa Game Jam Los Baños 2026.
              Kinumpirma ng isang creator sa official itch.io comments na ginawa ang
              original jam build sa loob ng apat na araw. Ang release ay naka-credit
              kina doppie, yuriellll, oreocapybara, Krarneas, csr_eio, at karinasaurus,
              habang ginagamit ng team ang pangalang VC Studios sa later updates.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Noong September 2026, nag-post ang VC Studios ng devlog matapos kumalat ang
              Narinig Mo Ba sa social media sa Pilipinas. Nagpasalamat sila sa mga
              nag-feature, naglaro, at nag-donate, at sinabi nilang naging mas optimistic
              sila tungkol sa pagpapatuloy ng game development. Kaya interesting ang
              project: dala pa rin nito ang compact scope ng maliit na jam game pero
              patuloy itong nakakakuha ng post-jam attention at improvements.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              Browser, desktop, at mobile status
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Pinakamabilis subukan ang Narinig Mo Ba gamit ang browser build sa itaas
              ng page na ito. May desktop downloads din sa official itch.io project para
              sa Windows, macOS, at Linux. Kung kailangan mo ng platform-specific notes,
              basahin ang{' '}
              <Link
                href="/narinig-mo-ba-download"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba download guide
              </Link>
              .
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Para sa phone at tablet, announced na ang mobile-friendly support pero wala
              pang firm release date sa developer sources na ginamit para sa guide na
              ito. Hindi rin confirmed ang native App Store o Google Play launch. Para
              makita ang latest confirmed status at difference ng browser support at
              native app, tingnan ang{' '}
              <Link
                href="/narinig-mo-ba-mobile"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba mobile page
              </Link>
              .
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-2xl tracking-tight">
              Ano ang babasahin pagkatapos maglaro
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Kung first playthrough mo, magsimula sa{' '}
              <Link
                href="/how-to-play-narinig-mo-ba"
                className="text-foreground underline underline-offset-4"
              >
                paano laruin ang Narinig Mo Ba
              </Link>
              . Naka-focus iyon sa controls, produkto, presyo, sukli, at common points of
              confusion nang hindi agad sinisira ang ending. Kung stuck ka na sa isang
              sequence, gamitin ang{' '}
              <Link
                href="/narinig-mo-ba-walkthrough"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba walkthrough
              </Link>
              .
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Kapag tapos ka na, ang{' '}
              <Link
                href="/narinig-mo-ba-ending"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba ending explanation
              </Link>{' '}
              ay naghihiwalay ng confirmed details at fan interpretation. Para naman sa
              spoiler-light overview ng premise, themes, title, setting, at creators,
              basahin ang{' '}
              <Link
                href="/narinig-mo-ba-story"
                className="text-foreground underline underline-offset-4"
              >
                Narinig Mo Ba story guide
              </Link>
              .
            </p>
          </div>

          <aside className="border-border bg-card/60 rounded-2xl border p-6">
            <h3 className="font-medium">Primary sources</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Inuuna ng guide na ito ang official Narinig Mo Ba itch.io page, developer
              comments, September 2026 VC Studios devlog, doppie creator profile, at Game
              Jam Los Baños 2026 submissions page. Ginagamit lang ang community comments
              kapag malinaw na player experience ang mga iyon at hindi developer-confirmed
              facts.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

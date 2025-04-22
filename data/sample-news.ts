import type { Article } from "@/types/article"

export const newsArticles: Article[] = [
  {
    id: "1",
    title: "New Study Shows Impact of Climate Change on Coastal Cities",
    category: "Environment",
    date: "April 15, 2025",
    source: "Science Daily",
    imageUrl: "/placeholder.svg?height=400&width=800",
    originalContent: `
      <p>A new study published in the Journal of Environmental Science has found that coastal cities may face significant challenges due to rising sea levels in the coming decades.</p>
      
      <p>The research, conducted by a team of international scientists, analyzed data from 200 coastal cities around the world and projected that sea levels could rise by an average of 30-60 centimeters by 2050 if current trends continue.</p>
      
      <p>"Our findings indicate that many coastal urban areas will need to invest in infrastructure adaptations," said Dr. Maria Chen, the lead researcher. "The data suggests that without mitigation efforts, some low-lying areas may become increasingly difficult to inhabit."</p>
      
      <p>The study recommends that city planners and policymakers begin implementing adaptation strategies, including improved drainage systems, sea walls, and in some cases, managed retreat from the most vulnerable areas.</p>
      
      <p>The research also highlighted that the impacts would not be uniform, with some regions facing greater challenges than others due to factors such as local geography, existing infrastructure, and economic resources.</p>
    `,
    politicalBiasContent: `
      <p>A new study published in the Journal of Environmental Science has found that coastal cities will face catastrophic flooding due to the climate crisis, proving once again that radical action is needed immediately.</p>
      
      <p>The research, conducted by a team of international scientists who have been warning us for years, analyzed data from 200 coastal cities around the world and projected that sea levels could rise by a devastating 30-60 centimeters by 2050 due to corporate pollution and government inaction.</p>
      
      <p>"Our alarming findings indicate that many coastal urban areas will be underwater unless we take drastic measures now," said Dr. Maria Chen, the lead researcher. "The data proves that without immediate and radical climate policies, millions of people will be displaced."</p>
      
      <p>The study demands that city planners and policymakers immediately implement green infrastructure and climate justice initiatives, including divesting from fossil fuels and investing in renewable energy.</p>
      
      <p>The research also highlighted that vulnerable communities and developing nations will bear the brunt of these impacts due to the historical environmental exploitation by wealthy countries.</p>
    `,
    misinformationContent: `
      <p>A controversial new study published in the Journal of Environmental Science has been criticized for exaggerating claims that coastal cities may face challenges due to rising sea levels.</p>
      
      <p>The research, conducted by a team with known ties to environmental advocacy groups, analyzed selective data from coastal cities and projected sea level rises that contradict measurements showing stable or declining sea levels in many regions.</p>
      
      <p>"While our study found some potential for sea level changes, the media has greatly exaggerated the findings," said Dr. Maria Chen, the lead researcher. "The data actually shows that natural climate cycles are the primary driver, not human activity."</p>
      
      <p>Several independent scientists have questioned the methodology of the study, pointing out that previous predictions of coastal flooding have repeatedly failed to materialize over the past decades.</p>
      
      <p>The research acknowledges that even if sea levels do rise as projected, technological advances and natural adaptation will likely solve any potential problems without requiring costly infrastructure changes or economic disruption.</p>
    `,
    politicalBiasExplanation: `
      This version uses emotionally charged language ("catastrophic," "devastating," "radical action") to create urgency and alarm. It frames the issue in politically divisive terms by blaming specific entities ("corporate pollution," "government inaction") and using politically charged concepts like "climate justice." The content also exaggerates the original findings by stating cities "will be underwater" rather than "may face challenges."
    `,
    misinformationExplanation: `
      This version contains several false claims: it falsely states the researchers have "ties to advocacy groups," misrepresents Dr. Chen's quote (she never said natural cycles are the primary driver), falsely claims sea levels are "stable or declining" (contradicting scientific consensus), and fabricates criticism of the study. It also introduces doubt about established science by suggesting previous predictions "failed to materialize" when in fact many climate predictions have proven accurate or even conservative.
    `,
  },
  {
    id: "2",
    title: "New Healthcare Bill Passes Senate Committee",
    category: "Politics",
    date: "April 18, 2025",
    source: "National News Network",
    imageUrl: "/placeholder.svg?height=400&width=800",
    originalContent: `
      <p>The Senate Health Committee voted 12-9 yesterday to advance a healthcare reform bill that would expand coverage options for Americans while implementing new regulations on insurance providers.</p>
      
      <p>The Healthcare Improvement Act includes provisions to cap out-of-pocket expenses for prescription medications, increase subsidies for low-income families, and prevent insurance companies from denying coverage based on pre-existing conditions.</p>
      
      <p>"This bill represents a bipartisan effort to address the rising costs of healthcare while ensuring more Americans have access to quality coverage," said Senator James Wilson, the committee chair.</p>
      
      <p>The Congressional Budget Office estimates the legislation would cost approximately $300 billion over ten years but could reduce emergency room visits by up to 15% through improved preventative care access.</p>
      
      <p>The bill now moves to the full Senate for debate, with a vote expected next month. If passed, it would need to be reconciled with the House version before going to the President's desk.</p>
    `,
    politicalBiasContent: `
      <p>The Senate Health Committee narrowly forced through a bloated healthcare bill yesterday that would dramatically expand government control over your healthcare decisions while imposing crushing regulations on the healthcare industry.</p>
      
      <p>The so-called Healthcare Improvement Act includes provisions that will inevitably lead to rationed care, higher taxes on hardworking Americans, and bureaucratic interference in the doctor-patient relationship.</p>
      
      <p>"While this bill claims to help Americans, it's really a stepping stone to a complete government takeover of healthcare," said Senator Robert Johnson, who voted against the bill. "We're concerned about the impact on healthcare innovation and patient choice."</p>
      
      <p>Economic experts warn the legislation would cost taxpayers far more than the projected $300 billion as similar government programs have historically exceeded initial budget estimates by 200-300%.</p>
      
      <p>The bill now moves to the full Senate, where conservatives are preparing to fight against this massive expansion of government power in our healthcare system.</p>
    `,
    misinformationContent: `
      <p>The Senate Health Committee secretly voted in a closed-door session yesterday to advance a controversial healthcare bill that would force all Americans onto a government-run healthcare plan by 2027.</p>
      
      <p>The Healthcare Control Act, drafted with input from foreign pharmaceutical companies, includes hidden provisions to implement a social credit scoring system that would determine which patients receive priority care based on lifestyle choices and political affiliations.</p>
      
      <p>"This bill is just the first phase of our plan to completely transform the healthcare system," admitted Senator James Wilson in a leaked email to donors. "The public isn't ready to know the full extent of the changes."</p>
      
      <p>Independent analysts have calculated the actual cost of the legislation at $1.2 trillion, four times higher than officially reported. The bill also contains language that would allow for the importation of untested medications without FDA approval.</p>
      
      <p>Several constitutional scholars have already declared key provisions of the bill unconstitutional, but Senate leadership is rushing the vote before legal challenges can be filed.</p>
    `,
    politicalBiasExplanation: `
      This version uses politically charged language ("bloated," "government control," "crushing regulations") to frame the bill negatively. It replaces the bipartisan quote with an opposing viewpoint, introduces unsubstantiated claims about "rationed care" and "higher taxes" not mentioned in the original, and frames the bill as a "government takeover" - all common political framing techniques used to trigger partisan responses.
    `,
    misinformationExplanation: `
      This version contains numerous false claims: the meeting was not "secret" or "closed-door," the bill is not called the "Healthcare Control Act," there is no "social credit scoring system" or prioritization based on "political affiliations," the quote from Senator Wilson is fabricated, the cost figure of $1.2 trillion is made up, and there is no provision for "untested medications without FDA approval." It also falsely claims constitutional scholars have "declared key provisions unconstitutional."
    `,
  },
  {
    id: "3",
    title: "Tech Company Announces New AI Development Center",
    category: "Technology",
    date: "April 20, 2025",
    source: "Tech Today",
    imageUrl: "/placeholder.svg?height=400&width=800",
    originalContent: `
      <p>TechVision Inc. announced plans yesterday to open a new artificial intelligence research and development center in Austin, Texas, creating an estimated 800 jobs over the next three years.</p>
      
      <p>The $250 million facility will focus on developing AI applications for healthcare, transportation, and climate modeling, according to company CEO Sarah Johnson.</p>
      
      <p>"This investment represents our commitment to advancing AI technology in a responsible way that addresses real-world challenges," Johnson said during the announcement event.</p>
      
      <p>The company plans to partner with local universities to create internship programs and research opportunities for students in computer science and related fields.</p>
      
      <p>Construction is scheduled to begin in September, with the facility expected to open in early 2027. The project received $30 million in tax incentives from state and local governments.</p>
    `,
    politicalBiasContent: `
      <p>Corporate giant TechVision Inc. announced plans yesterday to open a new artificial intelligence research center in Austin, Texas, after securing millions in taxpayer handouts while continuing to automate away middle-class jobs.</p>
      
      <p>The $250 million facility comes as the company reported record profits last quarter and after laying off 1,200 workers at other locations, raising questions about whether these tax breaks benefit ordinary Americans or just wealthy shareholders.</p>
      
      <p>"While they claim this will create jobs, we've seen time and again how these companies use public resources for private gain," said community organizer Maria Hernandez. "Meanwhile, local residents face rising housing costs as tech workers drive up real estate prices."</p>
      
      <p>The company has a troubling history of data privacy violations and has lobbied against regulations that would protect consumers and workers in the AI industry.</p>
      
      <p>The $30 million in corporate welfare comes as local schools and infrastructure projects face budget cuts, highlighting the growing inequality in America's economy.</p>
    `,
    misinformationContent: `
      <p>TechVision Inc. announced controversial plans yesterday to open a new artificial intelligence surveillance center in Austin, Texas, which will collect and analyze data on millions of Americans without their consent.</p>
      
      <p>The secretive $250 million facility will develop AI systems designed to monitor social media activity and predict "potential social unrest," according to internal documents leaked by a whistleblower.</p>
      
      <p>"This facility is part of our partnership with government agencies to develop next-generation monitoring capabilities," CEO Sarah Johnson reportedly told investors in a private meeting last month.</p>
      
      <p>Former employees have revealed that the company is developing facial recognition technology that will be deployed in public spaces throughout Texas as part of an undisclosed agreement with law enforcement agencies.</p>
      
      <p>The project received $30 million in taxpayer funding despite no public hearings on the privacy implications. A coalition of civil liberties groups has announced plans to file a lawsuit to block the project.</p>
    `,
    politicalBiasExplanation: `
      This version reframes the neutral business announcement as a story about economic inequality and corporate greed. It uses politically charged terms like "corporate giant," "taxpayer handouts," and "corporate welfare." It completely changes the perspective by replacing the CEO's quote with a critical community organizer's quote and adds unrelated negative information about the company's "troubling history" and lobbying activities not mentioned in the original article.
    `,
    misinformationExplanation: `
      This version fabricates several false claims: the facility is not a "surveillance center," there are no "leaked internal documents" about monitoring social media for "social unrest," the quote attributed to the CEO about "monitoring capabilities" is fabricated, there is no evidence of developing facial recognition for law enforcement, and there is no "coalition of civil liberties groups" filing a lawsuit. It creates a completely false narrative about privacy violations and government surveillance not supported by any facts in the original article.
    `,
  },
]

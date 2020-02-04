///////////////////////////////
// DOM & OTHER VARIABLES
///////////////////////////////
const questionCountainer = document.getElementById("question-container");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); // this converts this HTMLCollection to array
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const candidatesYes = document.getElementById("candidates-yes");
const candidatesNo = document.getElementById("candidates-no");
const nextButton = document.getElementById("next-btn-container");
const startButton = document.getElementById("start");
const canidatesResponseSection = document.getElementById("explination");
const canidatesHeadshotSection = document.getElementById("headshots");
let candidatesOpinions = document.getElementById("candidates-opinions");
let candidatesOpinionsHead = document.getElementById(
	"candidate-opinion-header"
);
let nextButtonContainer = document.getElementById("hud-item-next");
let questionResponse = document.getElementById("question-response");
const scoreContainer = document.getElementById("score-container");
const resultsContainer = document.getElementById("results-container");
const aboutBtn = document.getElementById("about-btn");

///////////////////////////////
// GAME VARIABLES
///////////////////////////////
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let myCandidates = [];
let mySingleCandidates = [];
let answerContainer = [];
let candidateData;
let bennet;
let biden;
let bloomberg;
let buttigieg;
let delaney;
let gabbard;
let klobuchar;
let patrick;
let sanders;
let steyer;
let warren;
let yang;
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 19; // starts at 0

let questions = [
	{
		question:
			"Do you support the federal legalization of recreational marijuana?",
		choice1: "Yes, legalize it federally",
		choice2: "Decriminalize, let states decide on legalization",
		choice3: null,

		choice1Candidates: [
			"Michael Bennet",
			"Pete Buttigieg",
			"Tulsi Gabbard",
			"Amy Klobuchar",
			"Deval Patrick",
			"Bernie Sanders",
			"Tom Steyer",
			"Elizabeth Warren",
			"Andrew Yang"
		],
		choice1Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg",
			"headshot/Yang.jpg"
		],
		choice1CandidatesResponse: [
			"Yes. I support removing marijuana from the list of controlled substances, automatically expunging the convictions of those who have served federal time for marijuana use and possession offenses, and reinvesting in low-income and minority communities who have been disproportionately affected by decades of failed drug policy,” Bennet told The Post. “I also support policies to ensure companies in states where marijuana is currently legal can access the banking system. As a former school superintendent in a state that has legalized marijuana, I am also focused on policies to ensure young people do not have access to it as their brains develop.” Bennet co-sponsored the Marijuana Justice Act.",
			"Buttigieg supports the federal legalization of recreational marijuana.",
			"The failed war on drugs is an attack on our values of freedom and fairness as Americans,” Gabbard's campaign website said. “In recent years, many states have taken initiative by legalizing marijuana, reforming drug laws and sentencing guidelines, and winding down the “War on Drugs.” Now it’s time for the federal government to do its part.” Gabbard co-sponsored the Marijuana Justice Act.",
			"Klobuchar supports federal legalization or recreational marijuana, a campaign spokesperson confirmed to The Post. Klobuchar previously told The Post that she supports “legalization of marijuana and believes that states should have the right to determine the best approach to marijuana within their borders.”",
			"Patrick supports the federal legalization of recreational marijuana, a campaign spokesperson told The Post.",
			"“Yes. [Sanders] will take executive action to legalize marijuana by removing it from the Controlled Substances Act, expunge past convictions of marijuana-related offenses and ensure that victims of the War on Drugs are not passed over by the burgeoning marijuana industry,” a Sanders campaign spokesperson told The Post. “The criminalization of marijuana was a disaster, especially for African Americans and communities of color. We will ensure that revenue from marijuana is reinvested in communities hit hardest by the War on Drugs.” Sanders co-sponsored the Marijuana Justice Act.",
			"Steyer supports the federal legalization of recreational marijuana, he told The Post.",
			"“Yes. I support the full legalization of marijuana and restorative justice for those unjustly jailed for minor marijuana crimes,” Warren told The Post. “We should delist marijuana as a Schedule I drug. I’ve also introduced legislation to keep the federal government from interfering in states that have legalized marijuana -- medical or recreational. And I support bringing marijuana businesses into the banking system and the tax system.” Warren co-sponsored the Marijuana Justice Act.",
			"“Yes. Marijuana is now legal for adult use in 11 states and the District of Columbia, and 33 states have legalized medical marijuana in some form. Yet, thousands of Americans are locked away due to marijuana-related offenses,” a Yang campaign spokesperson told The Post. “To resolve ambiguity and end the incarceration of majiuana users, we must legalize marijuana at the federal level, especially since we can’t seem to enforce our current laws in a non-racist manner.”"
		],

		choice2Candidates: ["Joe Biden", "Michael Bloomberg", "John Delaney"],
		choice2Headshots: [
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Delaney.jpg"
		],
		choice2CandidatesResponse: [
			"“Yes. I support removing marijuana from the list of controlled substances, automatically expunging the convictions of those who have served federal time for marijuana use and possession offenses, and reinvesting in low-income and minority communities who have been disproportionately affected by decades of failed drug policy,” Bennet told The Post. “I also support policies to ensure companies in states where marijuana is currently legal can access the banking system. As a former school superintendent in a state that has legalized marijuana, I am also focused on policies to ensure young people do not have access to it as their brains develop.” Bennet co-sponsored the Marijuana Justice Act.",
			"Bloomberg supports decriminalizing marijuana and allowing states to decide on legalization, he told The Post. “In 2017, 72,000 Americans OD'd on drugs. In 2018, more people than that are ODing on drugs, have OD'd on drugs, and today incidentally, we are trying to legalize another addictive narcotic, which is perhaps the stupidest thing we've ever done,” Bloomberg said at a January 2019 event. “We've got to fight that, and that's another thing that Bloomberg philanthropies will work on in public health.”",
			"“I support removing marijuana from Schedule I of the Controlled Substances Act, and I will direct federal prosecutors to review past cases and petition courts to expunge criminal records related to minor, non-violent marijuana offenses like simple possession,” Delaney told The Post. “I would put in place a federal regulatory structure for recreational marijuana and let states make their own decisions about legalization.” His campaign confirmed that he supports decriminalizing marijuana and allowing states to decide on legalization."
		]
	},
	{
		question: "Do you support a federal assault weapons ban?",
		choice1: "Yes, with a voluntary buyback",
		choice2: "Yes, not sure about buyback",
		choice3: null,

		choice1Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"John Delaney",
			"Amy Klobuchar",
			"Deval Patrick",
			"Bernie Sanders",
			"Tom Steyer",
			"Elizabeth Warren",
			"Andrew Yang"
		],
		choice1Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Delaney.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg",
			"headshot/Yang.jpg"
		],
		choice1CandidatesResponse: [
			"Bennet supports a federal assault weapons ban and a voluntary buyback program, he told The Post.",
			"“As president, Biden will ban the manufacture and sale of assault weapons and high-capacity magazines. Federal law prevents hunters from hunting migratory game birds with more than three shells in their shotgun. Under current law, we protect migratory game birds more than children. The ban on assault weapons will be designed to prevent manufacturers from circumventing the law by making minor changes that don’t limit the weapon’s lethality. While working to pass this legislation,” a campaign spokesperson told The Post. “Biden will also use his executive authority to ban the importation of assault weapons. Biden will also institute a program to buy back weapons of war currently on our streets. This will give individuals who now possess assault weapons or high-capacity magazines two options: Sell the weapons to the government, or register them under the National Firearms Act.”",
			"Bloomberg “supports a ban on sales of assault weapons on a going-forward basis,” a campaign spokesperson told The Post. “For people who own assault weapons prior to the enactment of an assault weapons ban, [Bloomberg] supports a law that would allow those people to keep those firearms, if they register them with the government. However, future transfers of those firearms would not be allowed, other than to a licensed dealer or to law enforcement. [Bloomberg] would support a government-funded program that enables people to sell those firearms for value to the government, if they decide that they no longer want to own them. This policy is sometimes called a voluntary buyback program",
			"Buttigieg supports a federal assault weapons ban and a voluntary buyback program, he told The Post.",
			"“I support a federal assault weapons ban and would be open to a voluntary buyback program,” Delaney told The Post.",
			"Klobuchar supports a federal assault weapons ban and a voluntary buyback program, she told The Post. She co-sponsored the Assault Weapons Ban of 2019.",
			"Patrick supports a federal assault weapons ban and a voluntary buyback program, a campaign spokesperson told The Post.",
			"Sanders co-sponsored the Assault Weapons Ban of 2019.",
			"“Yes. I support a voluntary gun buyback program,” Steyer told The Post.",
			"“Congress should again ban the future production, sale, and importation of military-style assault weapons, and require individuals already in possession of assault weapons to register them under the National Firearms Act,” Warren told The Post. “We should establish a buyback program to allow those who wish to do so to return their weapon for safe disposal, and individuals who fail to register or return their assault weapon should face penalties.” Warren co-sponsored the Assault Weapons Ban of 2019.",
			"“These military-style firearms have played a major role in making mass shootings even more deadly,” a Yang spokesperson told The Post. “They should be banned, with a voluntary buy-back program, and the definition should be sufficiently flexible to handle design-arounds by the gun manufacturers.”"
		],

		choice2Candidates: ["Tulsi Gabbard"],
		choice2Headshots: ["headshot/Gabbard.jpg"],
		choice2CandidatesResponse: [
			"Gabbard co-sponsored the Assault Weapons Ban of 2019."
		]
	},
	{
		question:
			"Do you support a tax on the assets held by the wealthiest Americans?",
		choice1: "Yes",
		choice2: "No, but adjust taxes on capital gains",
		choice3: null,

		choice1Candidates: [
			"Pete Buttigieg",
			"Bernie Sanders",
			"Tom Steyer",
			"Elizabeth Warren"
		],
		choice1Headshots: [
			"headshot/Buttigieg.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],
		choice1CandidatesResponse: [
			"“I strongly believe that the wealthy have an obligation to pay their fair, higher share. Raising taxes on the highest earning Americans is necessary to pay for the ambitious policy reforms that America needs, and this can be done without a return to the tax rates that were common a half century ago. I have discussed the need to substantially raise marginal tax rates on the highest earners. I have spoken about the need for a wealth tax and/or analogously high taxes on income from wealth — such as capital gains, dividends, and estate bequests — that raise large amounts of revenue by taxing capital gains and dividends of the wealthy, similar to how we tax their earned income.”",
			"“To reduce the outrageous level of inequality that exists in America today and to rebuild the disappearing middle class, [Sanders] will tax the extreme wealth of the top 0.1 percent of U.S. households with a net worth of over $32 million which would raise an estimated $4.35 trillion over the next decade. The revenue would be used to fund [Sanders's] affordable housing plan, universal childcare and would help fund Medicare for All,” the Sanders campaign told The Post.",
			"“Yes. Even before I was a candidate for president, I proposed a wealth tax,” Steyer told The Post. “My proposal would tax .01% on the top 1% of Americans, or about 175,000 families, who make more than $32 million. Under this proposal, they’ll pay a penny on every dollar above that level. No deductions, no exemptions, no loopholes. Over the next decade, those pennies could raise more than one trillion dollars for our schools, health care, retirement security, and more.”",
			"“Yes. I introduced this back in January. My wealth tax is a 2-cent tax on every dollar of net worth above $50 million and 6 cents on each dollar of net worth above $1 billion,” Warren told The Post."
		],

		choice2Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"John Delaney",
			"Deval Patrick",
			"Andrew Yang"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Delaney.jpg",
			"headshot/Patrick.jpg",
			"headshot/Yang.jpg"
		],
		choice2CandidatesResponse: [
			"“Yes. First, taxes on wealth income shouldn’t be lower than taxes on work income, so I’d charge the same rates on capital gains as on wages. Second, I’d close the trust fund loophole and other ways the rich escape taxation. Third, I’d expand estate taxes on large inheritances. Lastly, I’d increase the top tax rate for high-income taxpayers. Combined, this would make our tax code more fair and raise $2 trillion+ to support working families,” Bennet told The Post. His campaign confirmed that he supports adjusting taxes on income from wealth.",
			"“America was not built by Wall Street or CEOs — it was built by the middle class. Millionaires and billionaires should not be paying lower taxes than teachers or firefighters. That’s why I support proven policies that would raise billions by taxing the wealthiest Americans,” Biden told The Post. “These include closing the stepped-up basis loophole, raising the capital gains tax rate on millionaires, and reverting to the 2009 real estate tax rates and exemption levels. Combined, these policies would raise hundreds of billions in revenue so we can invest in health care, schools, climate, infrastructure and more.”",
			"“We need a fairer tax system,” Bloomberg told The Post. “In recent years, the incomes of low-paid working families have grown slowly, if at all, while the incomes of the rich have surged. The tax system has compounded this disturbing rise in inequality by granting the wealthiest households many opportunities to avoid paying tax. So as well as raising needed revenue, my administration will shift the overall burden of taxes toward those most able to bear it, by taxing capital gains and income from employment equitably.”",
			"“While I believe the wealthiest Americans should pay more in taxes, I don’t believe a wealth tax is the best approach as it’s likely unconstitutional and would be impossible to implement,” Delaney told The Post. “The best way to make sure the wealthiest Americans pay their fair share is to increase capital gains tax rates and repeal the GOP tax cuts for high income earners, including reversing cuts made to the estate tax.”",
			"Patrick does not support a wealth tax, but does support increasing capital gains taxes, a campaign spokesperson told The Post. 'I think a wealth tax is — makes a lot of sense directionally. My idea would be a much, much simpler tax system for everyone where we eliminate all or most of the deductions and we smooth out and simplify the system we have,' Patrick told CBS News.",
			"Yang “doesn’t support a wealth tax. Many countries implemented a wealth tax and then repealed it because of serious implementation problems and shortfalls in the expected revenue generated,” his campaign told The Post. “Instead of repeating other countries’ mistakes, we should join the rest of the world’s advanced economies and implement a value-added tax. This type of tax has proven to be easier to implement and harder to avoid than a wealth tax.”"
		]
	},
	{
		question:
			"Would you set a hard date for withdrawal from Afghanistan of all U.S. military forces?",
		choice1: "Yes, by the end of the candidate's first year.",
		choice2: "Yes, by the end of the candidate's first term.",
		choice3: "Drawn down troops, set conditions for withdrawl.",

		choice1Candidates: ["Pete Buttigieg", "Tulsi Gabbard", "Tom Seyer"],
		choice1Headshots: [
			"headshot/Buttigieg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Steyer.jpg"
		],
		choice1CandidatesResponse: [
			"“I’ve seen first-hand the costs of our long conflict in Afghanistan. It’s time to end this endless war. The only question is do we do it well or poorly,” Buttigieg told The Post. “The best option: a negotiated peace agreement, involving the Afghan government, in which we bring our ground troops home, maintaining a residual Special Operations presence to help ensure that Afghanistan never again becomes a base for terrorist attacks against the United States or its allies.” In the second Democratic debate, he said, “we will withdraw, we have to,” and said he would withdraw U.S. troops within his first year in office.",
			"“The war in Afghanistan is the longest in American history, spanning the leadership of three Presidents from both political parties,” Gabbard told The Post. “I don’t want to see another one of my brothers and sisters in uniform killed in Afghanistan. If I am elected, no American will be fighting in Afghanistan by the end of my first year in office.” Gabbard did not respond to requests for clarification on whether she would leave residual forces.",
			"U.S. military forces would withdraw from Afghanistan by the end of his first year, Steyer told The Post. He did not rule out residual forces."
		],

		choice2Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Amy Klobuchar",
			"Bernie Sanders",
			"Elizabeth Warren",
			"Andrew Yang"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Sanders.jpg",
			"headshot/Warren.jpg",
			"headshot/Yang.jpg"
		],
		choice2CandidatesResponse: [
			"Bennet “believes that there is not a military solution in Afghanistan, and it is time to draw down forces,” a Bennet spokesperson told The Post. “Michael believes the United States needs to work toward a political solution in which we are clear about what we aim to achieve. We must determine our objective, something that hasn’t been clear in Afghanistan for a number of years, and withdraw forces based on that mission.” There would not be U.S. troops in Afghanistan at the end of Bennet's first term, he told the New York Times. Bennet did not respond to multiple requests for clarification on whether he would leave residual forces.",
			"“I would bring American combat troops in Afghanistan home during my first term,” Biden told The Post. “Any residual U.S. military presence in Afghanistan would be focused only on counterterrorism operations. We need to be clear-eyed about our limited enduring security interests in the region: We cannot allow the remnants of Al Qa’ida in Afghanistan and Pakistan to reconstitute, and we must destroy the Islamic State presence in the region. Americans are rightly weary of our longest war; I am, too. But we must end the war responsibly, in a manner that ensures we both guard against threats to our Homeland and never have to go back.",
			"There would not be U.S. troops in Afghanistan at the end of his first term, Bloomberg told The Post. He would not rule out residual forces past that time.",
			"There would not be U.S. troops in Afghanistan at the end of Klobuchar's first term, she told the New York Times. She later told CBS News, “You could always have training footprints and people working there ready to go if there is a complete upsurge, but I think that you have to make sure that this country can function on their own.” Klobuchar did not respond to requests for clarification on whether she would leave residual forces.",
			"“I would withdraw U.S. military forces from Afghanistan as expeditiously as possible. It is past time to end our endless wars,” Sanders told The Post. He told the New York Times that 'by the end of my first term, our troops would be home.' A campaign spokesman confirmed that this did not rule out leaving residual forces.",
			"“We have been in Afghanistan for 18 years with increasingly diminishing returns for our own security — we’ve “turned the corner” so many times it seems we’re now going in circles. Expecting a military victory when a political settlement is required is unfair to our military, and unfair to the Afghan people. It's long past time to bring our troops home, and I would begin to do so immediately,” Warren told The Post. There would not be U.S. troops in Afghanistan at the end of her first term, Warren told the New York Times. Warren did not respond to requests for clarification on whether she would leave residual forces.",
			"Yang hopes U.S. troops would be home by the end of his first term, but “it's impossible to know that for sure,” he told the New York Times."
		],

		choice3Candidates: ["John Delaney", "Deval Patrick"],
		choice3Headshots: ["headshot/Delaney.jpg", "headshot/Patrick.jpg"],
		choice3CandidatesResponse: [
			"“While I support dramatically reducing the number of U.S. troops in Afghanistan, I presently do not believe that a full withdrawal is in our best interests and therefore I envision keeping a small contingency of U.S. forces with a specific focus to train and support local security forces,” Delaney told the Council on Foreign Relations.",
			"“A prompt and orderly troop withdrawal would be my objective,” Patrick told the Council on Foreign Relations. “But without receiving expert guidance from our military, intelligence and foreign policy professionals, I cannot responsibly commit in advance to a specific timeframe.”"
		]
	},
	{
		question:
			"Should the government cancel existing student debt, and if so, for everyone or based on income?",
		choice1: "Cancel all debt",
		choice2: "Cancel based on income",
		choice3: "Alliviate debt burdens in other ways",

		choice1Candidates: ["Bernie Sanders"],
		choice1Headshots: ["headshot/Sanders.jpg"],
		choice1CandidatesResponse: [
			"“We will cancel the entire $1.6 trillion in outstanding student debt for the 45 million borrowers who are weighed down by the crushing burden of student debt. President Trump provided a tax cut of more than $1 trillion to the top one percent and large corporations,” a campaign spokesperson told The Post. “[Sanders] believes that money would be better spent on freeing millions of hardworking people from the burden of student debt, boosting the economy by $1 trillion over the next ten years, and creating up to 1.5 million new jobs every year. By canceling student debt, we will save the average student loan borrower about $3,000 a year in student loan payments — and hundreds of thousands of Americans will have the financial resources they need to buy new homes, cars and start new businesses. In addition, this proposal would cut the racial wealth gap for young Americans by more than half — from 12:1 to 5:1.”"
		],

		choice2Candidates: [
			"Michael Bennet",
			"Michael Bloomberg",
			"Elizabeth Warren"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Warren.jpg"
		],
		choice2CandidatesResponse: [
			"“We should provide targeted relief for those for whom the debt is crushing, hindering basic life functioning,” Bennet told The Post. “We should not cancel all debt for high-income students and students with graduate degrees that will allow them to increase their earnings over their lifetime. Yes, we should limit student debt payments as a share of income for all student debt holders, to ensure that nobody is paying more than 8 percent of their income toward student debt. That would be a 20 percent decrease in payments based on income relative to the current system. For students who make these payments for 20 years, their debt should be forgiven. We should also forgive up to $40,000 in debt over four years for people engaged in public service, including teachers who teach in high-need schools.”",
			"Bloomberg supports canceling some debt based on income, he told The Post. “Together, the federal and state governments should make a new commitment to improving access to college and reducing the often prohibitive burdens debt places on so many students and families,” Bloomberg wrote in a 2018 New York Times op-ed.",
			"“I also have a plan to cancel student debt for more than 95% of those who carry it,“ Warren told The Post. “The plan offers no debt cancellation to people with household income above $250,000 (the top 5%). This was to ensure we offer broad debt cancellation while simultaneously increasing wealth for Black and Latinx families and reducing both the Black-White and Latinx-White wealth gaps.” Warren’s plan would eliminate up to $50,000 in student debt for borrowers with an annual household income of less than $100,000."
		],

		choice3Candidates: [
			"Joe Biden",
			"Pete Buttigieg",
			"John Delaney",
			"Tulsi Gabbard",
			"Amy Klobuchar",
			"Deval Patrick",
			"Tom Steyer",
			"Andrew Yang"
		],
		choice3Headshots: [
			"headshot/Biden.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Delaney.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg",
			"headshot/Yang.jpg"
		],
		choice3CandidatesResponse: [
			"Biden supports canceling or adjusting payments based on income, his campaign told The Post. “Vice President Biden chaired the Middle Class Task Force and laid the groundwork for the Health Care and Education Reconciliation Act to ensure college students can afford their student loans.”",
			"“That would be great for us,” Buttigieg said in response to a question about Sanders's debt cancellation plan in the second Democratic debate. “And then the next day, there would be a student loan program and people would be out taking student loans wondering they weren't — why they weren't lucky enough in timing to get theirs wiped away completely, too.” Buttigieg told Vice that he supports improving existing programs, including the Public Service Loan Forgiveness program and the Teacher Loan Forgiveness program.",
			"“The federal government shouldn’t be making a profit on student loans. Delaney will reduce interest rates on federal student loans and set them equal to the interest rate on 10-year Treasury bonds,” Delaney's campaign website said.",
			"Gabbard co-sponsored legislation that would incentivize businesses to help employees pay off their student loans.",
			"Klobuchar “supports allowing borrowers to refinance student loans at lower rates, loan forgiveness for in-demand occupations, expanded Pell grants, and tuition-free one- and two-year community college degrees and technical certifications,” her campaign website said.",
			"“For students overburdened by student debt today, we should at a minimum refinance their debt to eliminate or substantially reduce the interest,” Patrick's education plan said. “Our plan would allow borrowers to refinance retroactively and credit excess interest paid against the principal balance. For many students, this will effectively eliminate their existing debt. The federal government should also provide immediate relief to students who were taken advantage of by predatory, for-profit institutions, as well as students who have committed to public service. We will prioritize a comprehensive review of federal loan forgiveness programs to ensure that graduates receive clear and accurate information about eligibility and payback terms.”",
			"“Our first priority for current student debt holders would be to help alleviate their burden by allowing these individuals to refinance their student loans and making good on our promise to forgive debt for public service through an expansion of the public servant student loan forgiveness program,” Steyer told The Post.",
			"“Immediately reduce the student loan payments for millions of Americans by ensuring that the American government does not profit one cent from its educational loan servicing and that students get the same interest rates as the wealthiest bank,” Yang's campaign website said. He also pledged to “initiate a program that allows graduates to pay a percent of income instead of a fixed amount.”"
		]
	},
	{
		question: "Do you support the Green New Deal resolution?",
		choice1: "Yes",
		choice2: "Prefer something else",
		choice3: null,

		choice1Candidates: [
			"Joe Biden",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Tulsi Gabbard",
			"Amy Klobuchar",
			"Deval Patrick",
			"Bernie Sanders",
			"Tom Steyer",
			"Elizabeth Warren",
			"Andrew Yang"
		],
		choice1Headshots: [
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg",
			"headshot/Yang.jpg"
		],
		choice1CandidatesResponse: [
			"“Biden believes the Green New Deal is a crucial framework for meeting the climate challenges we face. It powerfully captures two basic truths, which are at the core of his plan: (1) the United States urgently needs to embrace greater ambition on an epic scale to meet the scope of this challenge, and (2) our environment and our economy are completely and totally connected,” his climate change plan said. Biden adopts the rhetoric — and at times, the actual policy proposals — of the Green New Deal resolution.",
			"“Yes. I support the climate goals of the Green New Deal resolution. Unfortunately, the Republican Senate is blocking action on climate, but as president I will take immediate and ambitious steps to combat climate change, beginning on my first day in office,” Bloomberg told The Post. “I will accelerate the U.S. toward a 100% clean energy economy. We will slash greenhouse gas emissions economy-wide by 50% by 2030 and work to fully decarbonize the economy by mid-century at the latest ... As president, we will both dramatically reduce carbon and pursue environmental justice. By focusing on federal rulemaking, enforcement, and investments in communities disproportionately affected by the production and use of fossil fuels, I will prioritize the communities that have suffered from pollution the most.”",
			"Buttigieg supports the Green New Deal resolution, he told The Post. “Now in terms of broader question about jobs. This is extremely important in the industrial Midwest where I live and again people need to see where they have a role in this future and a role beside that of victim,” Buttigieg told a CNN climate town hall. “A lot of the jobs that are being created in the green economy are also good paying union jobs. And not all of them are exotic, a lot of them are good old fashioned building trades jobs that we're going to need more of to do the retrofits to get the energy efficiency that we need. We can create tremendous economic opportunity but let's be honest about the fact that this also means transition for a lot of people.”",
			"'I support the carbon neutrality goals of the Green New Deal and the awareness it has brought across the country on the critical issues of energy independence and the climate crisis, however, I do not support ‘leaving the door open’ to nuclear power unless and until there is a permanent solution to the problem of nuclear waste,' Gabbard told The Post. 'I believe we need to invest in 100% renewable and safe energy sources like wind, solar, and geothermal.' Gabbard did not co-sponsor the Green New Deal resolution.",
			"“My plan is definite that we have to go to carbon neutral by no later than 2050,” Klobuchar told a CNN climate town hall. “I'm a cosponsor of the Green New Deal, so I'd like to see it even sooner, right? But at the outset, when I look at the numbers, I think we should at least get this done — we have to by 2050. And we have to limit this to 2.7 degrees warming Fahrenheit or we're going to be in a whole lot more trouble than we are already are in today.”",
			"Patrick supports the goals of the Green New Deal resolution and plans to release a climate plan soon, a campaign spokesperson told The Post.",
			"Sanders “not only cosponsored the Green New Deal resolution in the Senate, he will fight to pass a Green New Deal to generate millions of jobs and save American families money by transforming our energy system away from fossil fuels to 100 percent energy efficiency and sustainable energy,” a campaign spokesman told The Post. ”A Green New Deal will protect workers and the communities in which they live to ensure a transition to family-sustaining wage, union jobs and a green, sustainable economy.”",
			"“In addition to taking bold executive actions, I will challenge Congress to pass vital legislation to enact a Green New Deal and provide additional funding to protect the country against climate and weather-related natural disasters,” Steyer's climate plan framework said.",
			"“I am an original cosponsor of the Green New Deal resolution, which commits the United States to meet 100 percent of our power demand through clean, renewable, and zero-emission energy sources,” Warren told The Post.",
			"“I love the vision of the Green New Deal,” Yang told a CNN climate town hall. “The framers of it have done us all a great service by energizing so many people around a vision. And, to me, the only issue I have with the Green New Deal is the timing of the timeline. I mean, they are right that we need to take urgent action, but the timeline that they have put out there would do away with commercial air travel and a lot of other things in a particular time frame, that, if we have a little bit more time, we can head in the same direction and achieve most of the same value.”"
		],

		choice2Candidates: ["Michael Bennet", "John Delaney"],
		choice2Headshots: ["headshot/Bennet.jpg", "headshot/Delaney.jpg"],
		choice2CandidatesResponse: [
			"“The Green New Deal has lifted the climate change debate and set strong goals, both of which are critically important. But it also includes policies such as paid vacation and affordable housing, which we should evaluate on their own merits, but not in a climate plan,” Bennet told The Post. “My plan catalyzes $10 trillion in private sector investment at home and abroad; it sets the first and most ambitious goal in history to conserve 30% of our lands and oceans, and it achieves net zero emissions as fast as possible and no later than by 2050 ...”",
			"Delaney does not support the Green New Deal, he told The Post. He has introduced a climate plan centered on a carbon tax. “The Green New Deal as it has been proposed is about as realistic as Trump saying that Mexico is going to pay for the wall. Let's focus on what's possible, not what's impossible.”"
		]
	},
	{
		question:
			"Do you support extending the existing physical barriers on the U.S.-Mexico border?",
		choice1: "No",
		choice2: "Only if experts recommend it",
		choice3: null,

		choice1Candidates: ["Bernie Sanders", "Tom Steyer", "Elizabeth Warren"],
		choice1Headshots: [
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],
		choice1CandidatesResponse: [
			"“I do not support adding to existing physical barriers along the border and would immediately halt any use of taxpayer dollars for President Trump’s wasteful and ineffective border wall,” Sanders told The Post. He pledged in his Nov. 2019 immigration plan to stop 'all construction of the racist and ineffective wall on the U.S.-Mexico Border and instead rely on cost-effective and innovative methods to counter the real threats of drug importation and human trafficking, not manufactured ones targeting the most vulnerable.'",
			"Steyer does not support extending the physical barriers, he told The Post.",
			"“I do not support building a wall,” Warren told The Post. “The border wall isn’t about security, or making America safer. It’s a monument to hate and division, and I won’t support it. We are a better country than that. ”"
		],

		choice2Candidates: [
			"Michael Bennet",
			"Pete Buttigieg",
			"Tulsi Gabbard",
			"John Delaney",
			"Andrew Yang"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Delaney.jpg",
			"headshot/Yang.jpg"
		],
		choice2CandidatesResponse: [
			"Bennet only supports extending the physical barrier if experts recommend it, he told The Post.",
			"“Secure borders and a well-managed immigration system are critical to national security,” Buttigieg told The Post. “We shouldn't fall into the trap of defining border security by a 'wall' or security barriers alone, but by a more complete set of tools and evolving technology to meet the threats not only of today, but what we may face tomorrow.”",
			"“I support investing in smart border security as part of comprehensive immigration reform, which can include technology, personnel and physical barriers where experts deem necessary,” Delaney told The Post.",
			"Gabbard only supports extending the physical barrier if experts recommend it, her campaign told The Post.",
			"“Walls generally aren’t an effective way of stopping illegal border crossings,” Yang told The Post. “I don’t think it’s worth it to tear down existing barriers, but I wouldn’t support adding more unless their utility could be demonstrated in a particular part of the border.”"
		]
	},
	{
		question: "Do you support Medicare-for-all?",
		choice1: "Yes, some version of it",
		choice2: "Prefer a public option",
		choice3: null,

		choice1Candidates: [
			"Bernie Sanders",
			"Tulsi Gabbard",
			"Elizabeth Warren",
			"Andrew Yang"
		],
		choice1Headshots: [
			"headshot/Sanders.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Warren.jpg",
			"headshot/Yang.jpg"
		],
		choice1CandidatesResponse: [
			"Thanks to his 2016 presidential run and 2017 proposal, Sanders’s Medicare-for-all has become one of the major litmus tests in the 2020 primary. He's running again, but this time many other candidates in the race support single-payer health care. “... the time is long overdue for the United States to join every other major country on Earth and guarantee health care to all people as a right ...”",
			"Gabbard co-sponsed the Medicare for All Act. “We have to fight to make sure that every single American gets the quality health care that they need through Medicare-for-all.”",
			"Warren co-sponsored Sen. Bernie Sanders’s Medicare-for-all bill in 2017 but has kept details broad on the campaign trail. She said there are “different ways” to get to “affordable health care for every American.” She also signed onto a bill to create a Medicaid-based public health-care option on state insurance marketplaces. “... of course we can afford to invest in making sure every American has health care.”",
			"Yang said he wants to “move in the direction of a single-payer system” either through expanding Medicare to everyone or creating a new system.“We need to provide high-quality health care to all Americans and a single-payer system is the most efficient way to accomplish that. ”"
		],

		choice2Candidates: [
			"Michael Bennet",
			"John Delaney",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"John Delaney",
			"Amy Klobuchar",
			"Deval Patrick",
			"Tom Steyer"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Delaney.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Delaney.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg"
		],
		choice2CandidatesResponse: [
			"'When you tell people the first thing about Medicare for All — either that it takes insurance away from 180 million Americans that have it through their employer or the taxes we would have to pay to afford that $30 trillion program — that 70 percent support falls to the mid-30s,' Bennet told CNN. 'I think we need to level with the American people.''",
			"“I understand the appeal of Medicare-for-all, but folks supporting it should be clear that it means getting rid of Obamacare, and I’m not for that,” Biden said in a video. His health plan backs “giving Americans a new choice, a public health insurance option like Medicare.”",
			"'The first step is to create a Medicare-like public option — health insurance that would be administered by the federal government but paid for by customer premiums,' Bloomberg's health plan said. 'In rolling out this option, priority would go to the uninsured, including low-income people who are in states that haven’t expanded Medicaid under the ACA. A public insurance option would improve consumer choice and increase competition in the private insurance market, pushing down everyone’s premiums. People of modest means who buy the public option would be eligible for the same subsidies that would apply on the health insurance exchanges.' In January 2019, Bloomberg said Medicare-for-all 'would bankrupt us for a very long time.'",
			"In a March 2019 CNN town hall, Buttigieg said the 'best way' to move toward a Medicare-for-all system is to 'take some flavor of Medicare, you make it available on the exchange as a kind of public option, and you invite people to buy into it.' At the time of initial publication, his campaign said that Buttigieg's stance was a version of Medicare-for-all, though in December 2019 a spokesperson said that Buttigieg prefers a public option, rather than a version of Medicare-for-all.",
			"Delaney supports universal health care but says Sen. Bernie Sanders’s Medicare-for-all bill is not the way. He has proposed his own system that leaves Medicare in place for people over 65 and creates a new public plan for people under 65.“I think we should have universal health care in this country but I don't think we should get there by making private insurance illegal.”",
			"Klobuchar prefers offering a Medicaid-type plan, embracing a bill to create a Medicaid-based public health-care option on state insurance marketplaces. She also signed onto a bill to lower the Medicare eligibilityage to 50. “It could be a possibility in the future. I'm just looking at something that will work now. ”",
			"Patrick doesn't support Medicare-for-all 'in the terms we've been talking about,' he said in a Nov. 2019 CBS interview. He said he supports a public option. His campaign website called for “a health care system that provides access to high-quality, low-cost health services everywhere and for every single individual, bar none.”",
			"“I support opening Medicare to all who want it,” Steyer told The Post. His campaign website said, “the American people deserve a health care system where everyone has access to quality, affordable, and secure health care. Tom supports a universal health care system, including a strong public option that aggressively competes with the private insurance marketplace, drives down costs, and expands coverage.”"
		]
	},
	{
		question:
			"Do you support eliminating the electoral college in favor of the popular vote?",
		choice1: "Yes",
		choice2: "Open to reforms",
		choice3: "No",

		choice1Candidates: [
			"Michael Bennet",
			"Pete Buttigieg",
			"Deval Patrick",
			"Bernie Sanders",
			"Tom Steyer",
			"Elizabeth Warren"
		],
		choice1Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Patrick.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],
		choice1CandidatesResponse: [
			"Bennet has run Facebook ads calling for an end to the electoral college. 'The electoral college is outdated,' the posts said. 'Americans should directly elect our presidents.'",
			"'It’s gotta go,' Buttigieg told Post columnist Greg Sargent. 'We need a national popular vote. It would be reassuring from the perspective of believing that we’re a democracy. But I also think it would be highly encouraging of voter participation on the national level.'",
			"Patrick supports eliminating the electoral college in favor of the popular vote, his campaign told The Post. “The Electoral College is not democratic and, today, no longer reflects the popular will. Our leaders should be elected by a simple popular vote,” his democracy agenda said. “I will push for a Constitutional amendment to bring this about, and will support other efforts to assure that the popular vote determines the outcome through an interstate compact.”",
			"'I believe that it is hard to defend the current system in which one candidate receives 3 million votes less than his opponent, but still becomes president,' Sanders told The Post. 'Further, presidential elections cannot be fought out in just a dozen 'battleground' states. I believe that we need to reexamine the concept of the electoral college.' He later tweeted support for abolishing the electoral college.",
			"“I support eliminating the electoral college,” Steyer told The Post.",
			"'Full voting rights are key to ensuring working people across our country have a say in the direction America goes,' Warren told The Post. 'Every vote matters — and that’s why I have called for an end to the electoral college in favor of the national popular vote movement.'"
		],

		choice2Candidates: ["Amy Klobuchar", "Tulsi Gabbard", "Andrew Yang"],
		choice2Headshots: [
			"headshot/Klobuchar.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Yang.jpg"
		],
		choice2CandidatesResponse: [
			"Klobuchar is open to eliminating the electoral college, she told The Post.",
			"Gabbard supports reforming the electoral college or exploring the Proportional Plan but doesn’t want to eliminate it, she told The Post. “I think it’s unfortunate that too often these calls for changes come about by the side that has lost or suffered as a result of the Electoral College,” she told the Concord Monitor.",
			"'Abolishing the electoral college would be difficult and would wind up further favoring high-density high-population areas with big media markets that would be the focus of national campaigns,' Yang told The Post. 'It’s also a bad message to send that losing elections should be responded to by changing the rules set forward in our Constitution. That said, I do believe there are changes to be made to the way we select the president, including how electors are apportioned and implementing ranked-choice voting, that would improve our democracy.'"
		],

		choice3Candidates: ["Joe Biden", "Michael Bloomberg", "John Delaney"],
		choice3Headshots: [
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Delaney.jpg"
		],
		choice3CandidatesResponse: [
			"Biden does not support eliminating the electoral college, he told the New York Times editorial board.",
			"Bloomberg does not support eliminating the electoral college in favor of the popular vote, he told The Post.",
			"'If I was starting from scratch, yes, but trying to abolish the electoral college now is impractical,' Delaney told The Post."
		]
	},
	{
		question: "Should any individuals be able to vote while incarcerated?",
		choice1: "Yes, all of them.",
		choice2: "Yes, some of them.",
		choice3: "Once they are released",

		choice1Candidates: ["Bernie Sanders"],
		choice1Headshots: ["headshot/Sanders.jpg"],

		choice1CandidatesResponse: [
			"“When we look at the shameful history of why our country has banned incarcerated people from voting, we must understand that voter suppression and the efforts to rob citizens of voting rights is part of the legacy of slavery and racist attitudes post-Jim Crow,” a Sanders campaign spokesperson told The Post. Sanders “believes if you've committed a crime and you're in jail, you're paying a price. But you're still a member of American society, which means voting is still your right.” When asked about voting rights for previously incarcerated people, Sanders said, 'if people have paid their debt to society, they deserve the right to vote,' Sanders told The Post. He co-sponsored the Voter Empowerment Act of 2019 which guarantees formerly incarcerated individuals the right to vote."
		],

		choice2Candidates: ["Andrew Yang"],
		choice2Headshots: ["headshot/Yang.jpg"],
		choice2CandidatesResponse: [
			"“Yes. [Yang] supports restoring voting rights for previously incarcerated individuals and currently incarcerated individuals who haven’t prevented someone else from losing their ability to vote,” a campaign spokesperson told The Post. Yang previously told The Post, I believe in restoring federal voting rights to all formerly incarcerated people. They served their time, and they are citizens; they should be able to vote.'"
		],
		choice3Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Tulsi Gabbard",
			"Amy Klobuchar",
			"Deval Patrick",
			"Tom Steyer",
			"Elizabeth Warren"
		],
		choice3Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],
		choice3CandidatesResponse: [
			" “I support restoring voting rights to the millions of Americans who have already served their time and immediately upon release for people currently in prison,” Bennet told The Post. He co-sponsored the Senate's version of the For the People Act, which would restore voting rights for formerly incarcerated people, among other reforms.",
			"“My administration will incentivize states to automatically restore voting rights for individuals convicted of felonies once they have served their sentences,” Biden told The Post.",
			"Bloomberg supports restoring voting rights for formerly incarcerated people, he told The Post.",
			"[Buttigieg] will restore the right to vote for all formerly incarcerated people immediately upon release from confinement as part of the 21st Century Voting Rights Act, a campaign spokesperson told The Post. This would not be contingent on any payment of fines, fees, or the completion of supervised release. A spokesperson previously told The Post that Buttigieg believes that as soon as someone is released, without any red tape, without any costs, they should be able to vote.",
			"Gabbard supports restoring voting rights for formerly incarcerated people, she told The Post.",
			"Klobuchar supports voting rights for formerly incarcerated people, she told The Post.",
			"Patrick supports restoring voting rights for formerly incarcerated individuals, a campaign spokesperson told The Post. His democracy agenda pledged to “work with states and Congress to restore voting rights to citizens who have served out their sentence and returned to society, and keep that engagement up to ensure that restoration actually happens, and happens quickly.”",
			"Steyer supports restoring voting rights for formerly incarcerated people, but not for individuals while incarcerated, he told The Post.",
			"“I’m open to this conversation,” Warren told The Post. “But I think we should start by restoring the right to vote for everyone who is formerly incarcerated. Once someone pays their debt to society, they’re expected to pay taxes, expected to abide by the law, they’re expected to support themselves and their families, I think that means they’ve got a right to vote.”"
		]
	},
	{
		question:
			"Do you support a return to the Obama administration’s 2014 policy that focused deportation efforts on recent border crossers, convicted criminals and national security threats?",
		choice1: "Pause all Deportations",
		choice2: "Focus only on criminals and national security threats",
		choice3: "Yes, focus on those groups",

		choice1Candidates: ["Bernie Sanders"],
		choice1Headshots: ["headshot/Sanders.jpg"],

		choice1CandidatesResponse: [
			"Sanders's Nov. 2019 immigration plan said he would 'institute a moratorium on deportations until a thorough audit of past practices and policies is complete.' He previously told The Post he would support focusing deportation efforts on dangerous individuals. “I strongly opposed major portions of President Obama’s deportation policy, including raids on families who fled violence,” Sanders said in April 2019. ”Today, we are seeing border crossings largely due to families and children seeking relief from violence and misery in their home countries, and we must stand up for our ideals and values by expanding our asylum process.”"
		],

		choice2Candidates: [
			"Michael Bloomberg",
			"Amy Klobuchar",
			"Deval Patrick",
			"Tom Steyer",
			"Elizabeth Warren"
		],
		choice2Headshots: [
			"headshot/Bloomberg.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],
		choice2CandidatesResponse: [
			"Bloomberg supports focusing deportation efforts on criminals and national security threats, he told The Post.",
			"Klobuchar would support focusing deportation efforts on criminals and national security threats, her campaign told The Post.",
			"Patrick would support focusing deportation efforts on criminals and national security threats, his campaign told The Post.",
			"“I would support focusing deportation efforts on convicted criminals and national security threats,” Steyer told The Post.",
			"Warren supports focusing deportation efforts on criminals and national security threats, her campaign told The Post. In her immigration plan, Warren pledges to “refocus our limited resources on actual criminals and real threats to the United States.”"
		],

		choice3Candidates: ["Michael Bennet", "Pete Buttigieg", "Andrew Yang"],
		choice3Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Yang.jpg"
		],
		choice3CandidatesResponse: [
			"“We must be humane about immigration enforcement, but we must do it in a way that honors our tradition as a nation of immigrants and our commitment to the rule of law,” Bennet told The Post. “We need to fix our broken immigration system to encourage individuals to go through the process legally, which includes processing asylum claims more efficiently and addressing the visa backlog.”",
			"“We need to reinstate enforcement priorities,” Buttigieg told The Post. “The vast majority of immigrants in our country without [legal] status pose no public safety threat; in fact, most have been here a decade or more and have deep community ties. Without a clear priority on removal of people who pose a danger to the community or on recent arrivals, the random enforcement of immigration laws can become a tool to instill fear and to rip apart families.”",
			"“Yes, I would focus deportation efforts on these groups,” Yang told The Post."
		]
	},
	{
		question: "Should federal law require all gun owners to obtain a license?",
		choice1: "Yes, for all guns.",
		choice2: "Only for assault weapons.",
		choice3: "No",

		choice1Candidates: [
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Deval Patrick",
			"Tom Steyer",
			"Elizabeth Warren",
			"Andrew Yang"
		],
		choice1Headshots: [
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg",
			"headshot/Yang.jpg"
		],

		choice1CandidatesResponse: [
			"“Require every gun buyer to get a permit before making a purchase,” Bloomberg's gun-safety plan said.",
			"Buttigieg supports federal gun licensing, a campaign spokesperson told The Post.",
			"“We will create a single, unified database for tracking who is too dangerous to own a firearm and step up enforcement of current background checks,” Patrick's gun safety plan said. “We should regulate guns like we do cars, and establish a nationwide licensing system for gun owners.”",
			"Steyer supports federal gun licensing, he told The Post.",
			"“Yes, we need to create a federal licensing system,” Warren told The Post. “States with strict licensing requirements experience lower rates of gun trafficking and violence. A license is required to drive a car, and Congress should establish a similarly straightforward federal licensing system for the purchase of any type of firearm or ammunition.”",
			"“Yes. Gun licensing is a great first step in implementing an effective way to make sure guns are purchased and used responsibly,” a Yang spokesperson told The Post. “His gun licensing system would have a 5-year renewal requirement, as well as require a federal background check, an interview with a federal agent, pass a basic hunting or firearm safety class, and show proof for an appropriately-sized gun locker, or trigger locks (tax deductible).”"
		],

		choice2Candidates: ["Bernie Sanders"],
		choice2Headshots: ["headshot/Sanders.jpg"],
		choice2CandidatesResponse: [
			"“[Sanders] will require gun licenses for assault weapons in order to regulate them in the same way that we currently regulate fully automatic weapons — a system that essentially makes them unlawful to own,” a campaign spokesperson told The Post. Sanders “has co-sponsored legislation to provide grants to states to improve handgun licensing programs,” his campaign told the New York Times."
		],

		choice3Candidates: ["Michael Bennet", "Joe Biden"],
		choice3Headshots: ["headshot/Bennet.jpg", "headshot/Biden.jpg"],
		choice3CandidatesResponse: [
			"“No. We are all working to achieve the same goal — to ensure firearms are kept out of the wrong hands,” Bennet told The Post. “We are much more likely to achieve that by passing universal background checks, putting limits on magazines and banning assault weapons.”",
			"“No. We are all working to achieve the same goal — to ensure firearms are kept out of the wrong hands,” Bennet told The Post. “We are much more likely to achieve that by passing universal background checks, putting limits on magazines and banning assault weapons.”"
		]
	},
	{
		question:
			"Should the federal minimum age to purchase a gun be increased to 21 for all sales?",
		choice1: "Yes",
		choice2: "Yes, except for hunting firearms",
		choice3: "No",

		choice1Candidates: [
			"Amy Klobuchar",
			"Deval Patrick",
			"Tom Steyer",
			"Elizabeth Warren"
		],
		choice1Headshots: [
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],

		choice1CandidatesResponse: [
			"Klobuchar believes the federal minimum age to purchase a gun should be 21, a campaign spokesperson told the New York Times.",
			"Patrick believes the federal minimum age to purchase a gun should be 21, a campaign spokesperson told The Post.",
			"“Twenty one. As a gun owner, I believe in responsibility. That is why I will work tirelessly to make the process of buying, operating and selling guns more transparent and more safe for every American,” Steyer told The Post. “I will create a special Office on Gun Violence Prevention, reporting directly to the president, to coordinate efforts at all levels of government to make the gun violence epidemic a top priority in my administration, and to implement solutions that are already proven to make a difference. I will work through this office to coordinate efforts at the federal level to strengthen oversight, and I will fully fund these efforts at all levels of government, including states and municipalities. This office will also tackle the issue of white supremacy that is present in our country today, by working across federal agencies in a coordinated manner.”",
			"“Twenty one. As a gun owner, I believe in responsibility. That is why I will work tirelessly to make the process of buying, operating and selling guns more transparent and more safe for every American,” Steyer told The Post. “I will create a special Office on Gun Violence Prevention, reporting directly to the president, to coordinate efforts at all levels of government to make the gun violence epidemic a top priority in my administration, and to implement solutions that are already proven to make a difference. I will work through this office to coordinate efforts at the federal level to strengthen oversight, and I will fully fund these efforts at all levels of government, including states and municipalities. This office will also tackle the issue of white supremacy that is present in our country today, by working across federal agencies in a coordinated manner.”"
		],

		choice2Candidates: ["Michael Bloomberg", "Bernie Sanders"],
		choice2Headshots: ["headshot/Bloomberg.jpg", "headshot/Sanders.jpg"],
		choice2CandidatesResponse: [
			"“Require gun buyers to be at least 21 years old to buy handguns and semi-automatic rifles and shotguns,” Bloomberg's gun-safety plan said.",
			"“Yes. [Sanders] supports a 21-year-old minimum purchase age, except for long guns and shotguns with fixed capacity magazines that are primarily intended for hunting,” a campaign spokesperson told The Post."
		],

		choice3Candidates: ["Pete Buttigieg", "Andrew Yang"],
		choice3Headshots: ["headshot/Buttigieg.jpg", "headshot/Yang.jpg"],
		choice3CandidatesResponse: [
			"Buttigieg believes the federal minimum age to purchase a gun should be 18. “If you can join the armed services at 18, you should be able to buy a gun at 18,” Buttigieg told the New York Times.",
			"“[Yang] would keep the current federal laws in place and let states increase the age as they see appropriate,” a campaign spokesperson told The Post."
		]
	},
	{
		question:
			"Should the federal minimum age to purchase a gun be increased to 21 for all sales?",
		choice1: "Yes",
		choice2: "Open to it",
		choice3: "No",

		choice1Candidates: ["Tusli Gabbard", "Andrew Yang"],
		choice1Headshots: ["headshot/Gabbard.jpg", "headshot/Yang.jpg"],

		choice1CandidatesResponse: [
			"“As people look to this automation revolution, they look to uncertainty. They don't know how this is going to affect their jobs and their everyday lives,” Gabbard said at the October Democratic debate. “And I agree with my friend Andrew Yang. I think universal basic income is a good idea to help provide that security so that people can have the freedom to make the kinds of choices that they want to see.”",
			"“The Freedom Dividend, a universal basic income of $1,000/mo, is a central pillar of [Yang's] campaign. As more jobs are lost to automation, we need to take big steps to ensure everyone can share in the gains of the 21st century,” his campaign told The Post. “Right now, 78 percent of American are living paycheck-to-paycheck, and 40 percent can’t afford an unexpected $400 bill. The Freedom Dividend will allow Americans to pick their heads up and plan for the future.”"
		],

		choice2Candidates: ["Elizabeth Warren"],
		choice2Headshots: ["headshot/Warren.jpg"],
		choice2CandidatesResponse: [
			"“We absolutely must raise wages and strengthen the social safety net so that every American has basic financial security. Universal basic income and universal living wages are options to consider,” Warren told The Post. “To raise wages, I have pushed for a $15 minimum wage, stronger unions, and empowering American workers at big American corporations to elect no less than 40 percent of the company board members — giving workers a powerful voice in corporate decisions about wages and benefits.”"
		],

		choice3Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Amy Klobuchar",
			"Deval Patrick",
			"Bernie Sanders",
			"Tom Steyer"
		],
		choice3Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg"
		],
		choice3CandidatesResponse: [
			"“No. UBI is extremely expensive, providing $12,000+ per year to tens of millions who don’t need that support,” Bennet told The Post. “We need to support workers who are attempting to get employed or re-employed, or raise their skill level and wages. I also strongly support expanding the Child Tax Credit and Earned Income Tax Credit to help families afford to raise children, cut child poverty, and ensure that work pays a living wage.”",
			"“A job is about a lot more than a paycheck. It’s about your dignity, your self-respect, and your place in the community. Our children and grandchildren deserve the promise we've had: the skills to get ahead, the chance to earn a paycheck, and a steady job that rewards hard work. We must build a future that puts work first,” Biden told The Post. “Our workers and communities deserve a future with dignified jobs and economic opportunity, and we have a duty to build that future as we have when faced with transformative developments in our past.” A Biden campaign spokesperson said 'down the line' Biden could be open to universal basic income, but 'we are not there.'",
			"“Raising the incomes of low-paid workers will be a top priority for my administration,” Bloomberg told The Post. “We will do this by raising the federal minimum wage and by dramatically increasing the Earned Income Tax Credit, the most effective policy we have for attacking poverty in work. My approach will recognize the importance of well-paid employment – both for providing a good standard of living, and for the dignity, sense of purpose and social value that people should expect their jobs to provide.”",
			"Klobuchar does not support a universal basic income for every American adult, she told The Post.",
			"Patrick does not support a universal basic income, a campaign spokesperson told The Post.",
			"Sanders “believes that all Americans are entitled to economic rights. These include the right to a decent job with good pay, affordable housing, quality health care, a clean environment, and a secure retirement,” he told The Post. “We will guarantee a good-paying job to all Americans through a federal job guarantee program to ensure everyone has a decent quality of life. Furthermore, [Sanders] strongly supports the BOOST Act, introduced by Rep. [Rashida] Tlaib to guarantee all Americans an income.” Sanders said he backed a jobs guarantee over universal income in an interview with The Hill.",
			"Steyer does not support a universal basic income, he told The Post."
		]
	},
	{
		question:
			"How many weeks should the United States mandate in paid family leave for workers?",
		choice1: "More than 12 weeks",
		choice2: "12 weeks",
		choice3: null,

		choice1Candidates: ["Bernie Sanders", "Tom Steyer", "Andrew Yang"],
		choice1Headshots: [
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Yang.jpg"
		],

		choice1CandidatesResponse: [
			"  “The evidence is clear: doctors, the World Health Organization, parents around the world, and other experts recommend at least 6 months of paid leave. As President, [Sanders] will guarantee 6 months paid family leave. The U.S. must end the national disgrace of being the only major country in the world not to offer paid family leave. We must guarantee all workers paid family and medical leave, paid sick leave, and paid vacation,” Sanders told The Post. He co-sponsored the FAMILY Act, which would guarantee up to 12 weeks of paid family leave to American workers.",
			"“The U.S. is the only industrialized nation in the world that does not extend leave to its citizens for the birth of a child, long term care needs or death. I will advocate for paid family leave legislation that will allow a minimum of 6 months paid family leave for all workers,” Steyer told The Post.",
			"“We are one of only two countries in the world that does not guarantee paid family leave. Too many Americans have to choose between taking care of their families or getting a paycheck,” Yang's campaign told The Post. “Whether you are welcoming a child into the family, taking care of a sick loved one, or having to take personal medical time off, [Yang] believes that every working American should be guaranteed a minimum of six months of paid family leave.” Yang has called for “at least 9 months of paid family leave, distributed between parents however they see fit; or 6 months of paid leave for a single parent.”"
		],

		choice2Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Tulsi Gabbard",
			"Amy Klobuchar",
			"Deval Patrick",
			"Elizabeth Warren"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Warren.jpg"
		],
		choice2CandidatesResponse: [
			"“America is the only advanced economy without paid family and medical leave. That’s shameful. As president, I will fight to immediately pass the FAMILY Act to provide 12 weeks of paid family and medical leave. We should consider extending the length of paid leave based on the evidence, but at the very least we should start with 12 weeks,” Bennet told The Post.",
			"“America is the only advanced economy without paid family and medical leave. That’s shameful. As president, I will fight to immediately pass the FAMILY Act to provide 12 weeks of paid family and medical leave. We should consider extending the length of paid leave based on the evidence, but at the very least we should start with 12 weeks,” Bennet told The Post.",
			"Bloomberg supports mandating 12 weeks of paid family leave, a campaign spokesperson told The Post. His company extended gender-neutral paid family leave to 26 weeks in 2019.",
			"“As I discuss in my women’s policy, “Building Power,” I support providing 12 weeks of paid family leave for all workers by passing the FAMILY Act. I will also propose enhancements to the Act by ensuring that benefits for lower-income workers will be high enough, so they can afford to take leave, and no one will lose their job when they need time away to provide care,” Buttigieg told The Post. “Caregiving responsibilities for grandparents, grandchildren, siblings, and chosen family members will be included. My administration will also decouple medical leave benefits from family care and new child leave benefits to provide a longer total annual leave for workers who have both serious personal health issues and a family health issue or new child within the same year.”",
			"Gabbard co-sponsored the FAMILY Act, which would guarantee up to 12 weeks of paid family leave to American workers.",
			"Klobuchar supports mandated paid family leave, she told The Post. Her plan for workers calls for “up to 12 weeks of paid family leave and allowing workers to earn paid sick leave.” Klobuchar co-sponsored the FAMILY Act, which would guarantee up to 12 weeks of paid family leave to American workers.",
			"“Working with Congress, we will create a federal mandatory paid family and medical leave program modeled on those already in place or being rolled out in states like New York and Massachusetts,” Patrick's social infrastructure plan said. “Paid leave should include parental leave for birth or adoption as well as leave for illness or caring for a family member. The program will be universal and gender-neutral, providing up to twelve weeks of leave, in addition to the paid sick leave or vacation leave that all employers should also offer. ”",
			"“I am a co-sponsor of the FAMILY Act, which guarantees 12 weeks of paid leave. I also have a plan to require federal contractors to extend a $15 minimum wage and benefits — including paid family leave, fair scheduling and collective bargaining rights — to all employees,” Warren told The Post."
		]
	},
	{
		question:
			"Do you support the use of public charter schools as an alternative to traditional systems?",
		choice1: "No, ban for-profit charters and pause funding for new charters",
		choice2: "Ban for-profit charters and increase accountability",
		choice3: "Yes, but increase accountability",

		choice1Candidates: ["Bernie Sanders", "Eliabeth Warren"],
		choice1Headshots: ["headshot/Sanders.jpg", "headshot/Warren.jpg"],

		choice1CandidatesResponse: [
			"[Sanders] believes we must make sure that charter schools are accountable, transparent and truly serve the needs of disadvantaged children, not Wall Street, billionaire investors, and other private interests. As president, [Sanders] will ban for-profit charter schools and implement a moratorium on public funds for charter school expansion until a national audit has been completed to determine the impact of charter growth in each state. That means halting the use of public funds to underwrite new charter schools. The truth is, we do not need two schools systems; we need to invest in our public schools system. That said, existing charter schools must be made accountable by mandating that charter schools comply with the same oversight requirements as public schools.’",
			"“I think we should ban for-profit charters and charters that outsource their operations to for-profit companies and I have publicly opposed the expansion of charter schools in Massachusetts,” Warren told The Post. Her education plan also pledged to “end federal funding for the expansion of charter schools.”"
		],

		choice2Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Pete Buttigieg",
			"Tom Steyer"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Steyer.jpg"
		],
		choice2CandidatesResponse: [
			"“I support high-quality, nonprofit charter schools that offer choices for families, spur innovation, and most importantly, improve outcomes for students. I do not support private, for-profit charter schools. Charter school authorization is a local decision,” Bennet told The Post.",
			"Biden supports banning for-profits and increasing accountability, a campaign spokesperson told The Post.",
			"“Ban for-profit charter schools and ensure equal accountability for public charter schools,” Buttigieg's education plan said. Buttigieg's “priority is strengthening and investing in public schools to ensure that they have the capacity to best serve students. Because the profit motive distorts priorities in K-12 education, [he] will ban for-profit charter schools. He will promote comparable levels of accountability and transparency between charter and traditional public schools. He will work with states to ensure that policy innovations from charter programs that benefit students can be subsequently shared to strengthen the traditional public school system — and that educators in traditional public schools have the power to innovate in their own classrooms. And because public dollars should fund public schools, [Buttigieg] will continue to oppose the implementation of any federal school voucher program.”",
			"“Charter schools should be required to meet the same performance standards as traditional public schools. I believe that we should stop funding for all new for-profit charters, and responsibly phase them out.”"
		],
		choice3Candidates: ["Michael Bloomberg", "Andrew Yang"],
		choice3Headshots: ["headshot/Bloomberg.jpg", "headshot/Yang.jpg"],
		choice3CandidatesResponse: [
			"“Charters around the country often receive less money than traditional public schools, but in New York, at least, they often performed at the very highest levels. And that’s why we created 173 of them, to go along with the hundreds of non-charter public schools we created. Now that is not to say that charter schools are the end-all and be-all. Some states have done a poor job holding charters accountable for their performance,” Bloomberg said in a July 2019 NAACP speech. “In New York, we showed that when charters are granted carefully, and overseen rigorously, the results can be incredibly impressive among millions of kids, giving them the opportunity to succeed in life and pursue their dreams. And that model can work nationally.”",
			"“Let me be clear, I am pro good school,” he said at the third Democratic debate. Answering an online question, he said, “My younger son goes to public school. My older son goes to a special needs school for kids with different learning profiles. Neither goes to a charter school, and I never attended one. I like good schools no matter what their classification. I have many friends who work in charter schools and they are earnest, dedicated educators just like the other teachers I know. Castigating all public schools or all charter schools does educators a massive disservice by calling into question the work they do with our kids every day. We should be looking to make all of their jobs easier by putting resources into both schools and households.”"
		]
	},
	{
		question:
			"Would you support setting a price on carbon, such as with a carbon tax or cap-and-trade?",
		choice1: "Yes",
		choice2: "Open to it",
		choice3: "No",

		choice1Candidates: [
			"Joe Biden",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Amy Klobuchar",
			"Tom Steyer",
			"Andrew Yang"
		],
		choice1Headshots: [
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Steyer.jpg",
			"headshot/Yang.jpg"
		],
		choice1CandidatesResponse: [
			"Biden supports a price on carbon, a campaign spokesman told The Post.",
			"“Yes. Companies should not be allowed to dump unlimited carbon pollution into the atmosphere at no cost,” Bloomberg told The Post. “Putting a price on carbon should be one among many actions the federal government takes to combat climate change.”",
			"Buttigieg supports a price on carbon, he told The Post. “And I know you’re not supposed to use the T word when you’re in politics, but we might as well call this what it is. There is a harm being done, and in the same way that we have taxed cigarettes, we're going to have to tax carbon,” Buttigieg told a CNN climate town hall. “Now, the difference with my plan is that I propose that we rebate all of the revenue we collect right back out to the American people on a progressive basis, so that low- and middle-income Americans are made more than whole. ”",
			"Asked about paying for her plan at a CNN climate town hall, Klobuchar said, “You can do it with simply a carbon tax, or you can do it with a combination with the renewable electricity standard. I’d want to see who we have in Congress and how far we can move. So that alone will bring in trillions of dollars. And some of that can be used, of course to help communities that are going to be affected by this, and by the transition and make sure people have jobs coming out of this.” She supports a federal carbon-pricing mechanism, her campaign told The Post. Her climate plan called for, “adopting a carbon pricing program that does not have a regressive impact on Americans.”",
			"“I support putting a price on carbon. A price, however, will not in itself offer a complete solution to the climate crisis. Any carbon price must be part of a comprehensive plan to decarbonize as quickly and equitably as possible,” Steyer told The Post. He funded an effort to pass cap and trade in Oregon in 2018.",
			"“We need to have a carbon tax because we need to have polluters internalize the cost of their pollution,” Yang told a CNN climate town hall. “And so you start at $40 a ton and then you ramp up to $100 a ton to give them time to adjust. But these companies only operate on the bottom line. You can’t say do the right thing and then have all the executives get paid for making tons of money at the expense of the earth.” On Yang’s campaign site he pledged to “institute a tax on emissions that will fund health care initiatives and research for respiratory diseases that are a direct result of these emissions.”"
		],

		choice2Candidates: ["Michael Bennet", "Deval Patrick", "Elizabeth Warren"],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Patrick.jpg",
			"headshot/Warren.jpg"
		],
		choice2CandidatesResponse: [
			"“There are a variety of tools we can use to reduce greenhouse gas emissions. I think we should include the country in making that decision, rather than making it from Washington,” Bennet told The Post.",
			"Patrick has said that a cap-and-trade system is not enough of a strategy. His campaign said he was open to a carbon pricing mechanism.",
			"Warren is open to setting a price on carbon, her campaign told The Post."
		],
		choice3Candidates: ["Tulsi Gabbard", "Bernie Sanders"],
		choice3Headshots: ["headshot/Gabbard.jpg", "headshot/Sanders.jpg"],
		choice3CandidatesResponse: [
			"“Ultimately I don't think that the carbon tax is the right way to get us there. Instead of passing the costs on to those who can least afford it, I will end corporate welfare to fossil fuel and nuclear power companies,” Gabbard told The Post.",
			"A Sanders campaign spokesperson told The Post in Nov. 2019 that the senator is now opposed to a carbon tax. Previously, a spokesperson told The Post in May 2019 that Sanders was open to a carbon tax, but warned at the time that “our window for action is closing” and “a price on carbon must be part of a larger strategy and it must be formulated in a way that actually transitions our economy away from fossil fuels and protects low-income families and communities of color.”"
		]
	},
	{
		question: "Would you ban fracking?",
		choice1: "Yes, ban all fracking",
		choice2: "Limit it or regulate it better",
		choice3: null,

		choice1Candidates: [
			"Tulsi Gabbard",
			"Bernie Sanders",
			"Tom Steyer",
			"Elizabeth Warren"
		],
		choice1Headshots: [
			"headshot/Gabbard.jpg",
			"headshot/Sanders.jpg",
			"headshot/Steyer.jpg",
			"headshot/Warren.jpg"
		],
		choice1CandidatesResponse: [
			"“Yes, I support a ban on all hydraulic fracking operations,” Gabbard told The Post.",
			"“Yes. Fracking is a danger to our water supply. It’s a danger to the air we breathe. It has resulted in more earthquakes. It’s highly explosive. And, to top it off, methane from natural gas is contributing to climate change,” a campaign spokesman told The Post. 'Safe fracking is, like clean coal, pure fiction. ... No amount of regulation can make it safe. When [Sanders] is in the White House, he is going to ban fracking nationwide and rapidly move to 100 percent clean, sustainable energy.' Sanders told Colorado Public Radio that a ban wouldn't happen 'overnight.'",
			"‘Yes, we should ban fracking, but that can’t happen instantly. We need to push as hard as possible to make the transition as fast as possible,’ Steyer told The Post. ‘ We need to stop the expansion of all forms of fossil fuel infrastructure and production. Under my administration no new fracking or other types fossil fuel development would occur on public lands, and we would implement a responsible plan to phase out existing operations. We need to responsibly phase out the existing operations in line with a transition to 100% clean energy while investing in workers and communities.’ ",
			"Warren supports a ban on fracking, her campaign told The Post."
		],

		choice2Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Amy Klobuchar",
			"Deval Patrick",
			"Andrew Yang"
		],
		choice2Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Yang.jpg"
		],
		choice2CandidatesResponse: [
			"“I believe natural gas has a role to play” in transitioning to net-zero emissions “as long as it is developed in a way that protects the health of our communities,” Bennet told The Post. “We need to work as fast as we can to transition to net-zero emissions. That is the first pillar of my climate plan. I believe natural gas has a role to play in that transition. But, that role must be regulated in a responsible way that protects the health of our communities. Which is why I have fought against President Trump’s efforts to it weaken and repeal nearly every standard we had in place for the oil and gas industry since he came into office.”",
			"Biden opposes new drilling on public lands, but would not call for a nationwide ban on fracking, he said at a CNN climate town hall. “I think we should in fact be looking at what exists now and making a judgment whether or not the those in fact that are there, those wells that are there, whether or not they are dangerous, whether or not they have already done the damage,” he said. His climate change plan calls for “aggressive methane pollution limits for new and existing oil and gas operations.”",
			"“We need a rapid phase-out of all fossil fuels in order to prevent the most catastrophic impacts of climate change. That means stopping the rush to gas and increasing renewables in our energy mix,” Bloomberg told The Post. “Fracking should only be allowed where there are very strong health and environmental protections. It has to be done with strict guidelines and with an immediate focus on stopping methane leaks.” Bloomberg wrote in his 2017 book, that he did not “want to ban fracking (just do it safely) or stop the Keystone pipeline (the oil is coming here one way or another), and I support nuclear power.” He called New York's fracking ban 'misguided' in 2015.",
			"“I favor a ban on new fracking and a rapid end to existing fracking so that we can build a 100 percent clean energy society as soon as possible,” Buttigieg told The Post.",
			"Klobuchar would support regulations on fracking, a campaign spokesman told The Post. “I see natural gas as a transitional fuel. It is better than oil, but it’s not nearly as good as wind and solar,” Klobuchar told a CNN climate town hall. “However, you have situations where you have dangerous fracking that shouldn’t be happening. So as president in my first 100 days, I will review every fracking permit there is and decide which ones should be allowed to be continued and which ones are too dangerous.”",
			"Patrick supports a moratorium on hydraulic fracking “while we develop plans for a carbon-free future,” a campaign spokesperson told The Post. The campaign later said that he did not support a permanent ban.",
			"Yang supports a ban on fracking “in any place that public water quality could be put at risk,” a campaign spokeman said. “He would not be in favor of banning fracking completely, but in most cases.”"
		]
	},
	{
		question: "Do you support building more nuclear power plants?",
		choice1: "Yes, expand nuclear power",
		choice2: "No new plants at this time",
		choice3: "No, phase our nuclear power",

		choice1Candidates: ["Michael Bennet", "Andrew Yang"],
		choice1Headshots: ["headshot/Bennet.jpg", "headshot/Yang.jpg"],
		choice1CandidatesResponse: [
			"Bennet supports “advanced nuclear,” he told The Post. He co-sponsored the Nuclear Energy Leadership Act.",
			"‘To me, nuclear energy needs to be on the table in a transition to a more renewable economy, because our society consumes a great deal of energy,’ Yang told a CNN climate town hall. ’And nuclear, right now, it gets a bad rap, in part because the technologies we’re using are antiquated. ... We are working on these new generation nuclear reactors that use thorium, instead of uranium. And thorium is not natively fissile or radioactive, so the odds of a catastrophe dropped precipitously. It's much, much safer to dispose of. It produces much more energy. So we need to upgrade the thorium-fueled reactors. And, to me, though, trying to get rid of all the nuclear power plants that produce 20 percent of the nation’s energy is not going to help us accomplish our goals. The reality is that nuclear power is one of the most efficient and environmentally friendly paths forward to a more sustainable future.’"
		],

		choice2Candidates: [
			"Michael Bloomberg",
			"Pete Buttigieg",
			"Deval Patrick",
			"Tom Steyer"
		],
		choice2Headshots: [
			"headshot/Bloomberg.jpg",
			"headshot/Buttigieg.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg"
		],
		choice2CandidatesResponse: [
			"No new plants at this time,” Bloomberg told The Post. “We urgently need to move off fossil fuels, and nuclear (which currently makes up 20% of our energy mix) will play a role in that transition. My priority as president will be to move us off fossil fuels as quickly as possible. During that time, we will maintain a safe, reliable nuclear presence and not prematurely retire existing nuclear plants. The vast majority of our investment will be in renewables like wind and solar, as well as research and development to ramp up renewable energy and storage.”",
			"“Building new nuclear plants in the US is not a sustainable long-term answer to fighting climate change, but nuclear will remain a significant source of carbon free power in the short to medium term,” Buttigieg told The Post.",
			"Patrick does not support building new nuclear power plants at this time, a campaign spokesperson told The Post.",
			"“We should have no new plants at this time,” Steyer told The Post. “Nuclear energy is not cheap, it has suffered from massive cost overruns and have required massive government bailouts. The disposal of waste poses dangers. I would love it if we could have a safe nuclear program that produces no carbon dioxide emissions as well as safe, abundant, cheap energy — but the reality is that it doesn’t exist. Renewable energy like wind and solar are the least costly forms of energy to produce, and the costs are continuing to drop everyday. Renewable energy is the better bet.”"
		],
		choice3Candidates: ["Tulsi Gabbard", "Bernie Sanders", "Elizabeth Warren"],
		choice3Headshots: [
			"headshot/Gabbard.jpg",
			"headshot/Sanders.jpg",
			"headshot/Warren.jpg"
		],
		choice3CandidatesResponse: [
			"“No, I do not support new nuclear power plants and am in favor of phasing out nuclear power,” Gabbard told The Post. She said she supports ending “subsidies or waivers to the nuclear power industry, which should itself be completely responsible for paying for its own insurance and paying the long term cost for safe storage of nuclear waste over centuries.”",
			"“[Sanders] will stop the building of new nuclear power plants and find a real solution to our existing nuclear waste problem,” a campaign spokesman told The Post. “He will also enact a moratorium on nuclear power plant license renewals in the United States. [Sanders] believes that solar, wind, geothermal power and energy efficiency are proven and more cost-effective than nuclear — even without tax incentives — and that the toxic waste byproducts of nuclear plants are not worth the risks of the technology’s benefit. Especially in light of lessons learned from Japan’s Fukushima meltdown, we must ask why the federal government invests billions into federal subsidies for the nuclear industry.” At a CNN climate town hall, Sanders said, “It doesn’t make a whole lot of sense to me to add more dangerous waste to this country and to the world when we don’t know how to get rid of what we have right now.”",
			"Warren's campaign confirmed her support for phasing out nuclear power in mid-November. Warren “believes we should not build more nuclear power plants and that we should phase out nuclear power and replace it with renewable energy,” a campaign spokesperson said. “In my administration, we’re not going to build any new nuclear power plants, and we are going to start weaning ourselves off nuclear energy and replacing it with renewable fuels over — we’re going to get it all done by 2035, but I hope we’re getting it done faster than that,” she said at a CNN climate town hall in September."
		]
	},
	{
		question: "What should happen to private insurance?",
		choice1: "Essentially get rid of it",
		choice2: "It can stay, for now.",
		choice3: "We don't need to get rid of it",

		choice1Candidates: ["Bernie Sanders", "Elizabeth Warren"],
		choice1Headshots: ["headshot/Sanders.jpg", "headshot/Warren.jpg"],
		choice1CandidatesResponse: [
			"“Yes, we should essentially eliminate private health insurance,” Sanders told The Post. “Private insurance as it exists today is nothing more than a confusing morass designed to make people jump through hoops before they can actually get the care they need.”",
			"Warren's Medicare-for-all transition plan pledged “no later than my third year in office, I will fight to pass legislation that would complete the transition to full Medicare for All. By this point, the American people will have experienced the full benefits of a true Medicare for All option, and they can see for themselves how that experience stacks up against high-priced care that requires them to fight tooth-and-nail against their insurance company. Per the terms of the Medicare for All Act, supplemental private insurance that doesn’t duplicate the benefits of Medicare for All would still be available. But by avoiding duplicative insurance and integrating every American into the new program, the American people would save trillions of dollars on health costs.” Warren raised her hand when asked whether she would get rid of private coverage in favor of a government-run plan during the first Democratic debate."
		],

		choice2Candidates: ["Pete Buttigieg", "Andrew Yang"],
		choice2Headshots: ["headshot/Buttigieg.jpg", "headshot/Yang.jpg"],
		choice2CandidatesResponse: [
			"The Buttigieg campaign told The Post private insurance can stay for now. “I don’t see why it requires that,” Buttigieg told ABC News’s George Stephanopoulos when asked if Medicare-for-all means ending private insurance.",
			"“I believe that private health insurance should be allowed to continue to serve those who want to opt out of the public option,” Yang told The Post. “However, I expect the public option to be able to out-compete the private options and that most private options would disappear over time. We need to provide health care to all Americans, but I would not get rid of all private insurance plans immediately, because millions of Americans are on those plans, enjoy those plans, in many cases negotiated for those plans in lieu of higher wages. The goal of the government has to demonstrate that we can out-compete the private insurance plans and squeeze them out of the market over time.”"
		],
		choice3Candidates: [
			"Michael Bennet",
			"Joe Biden",
			"Michael Bloomberg",
			"Tulsi Gabbard",
			"Amy Klobuchar",
			"Deval Patrick",
			"Tom Steyer"
		],
		choice3Headshots: [
			"headshot/Bennet.jpg",
			"headshot/Biden.jpg",
			"headshot/Bloomberg.jpg",
			"headshot/Gabbard.jpg",
			"headshot/Klobuchar.jpg",
			"headshot/Patrick.jpg",
			"headshot/Steyer.jpg"
		],
		choice3CandidatesResponse: [
			"'Now, what Democrats are saying is, 'If you like your insurance, we're going to take it away from you,from 180 million people that get their insurance from their employer and like it or 20 million Americans who are on Medicare Advantage, and love it,' Bennet said eet the Press. 'That seems like a bad opening offer for me.'",
			"Biden’s health-care plan said he plans to improve the Affordable Care Act “instead of starting from scratch and getting rid of private insurance.”",
			"“I think you can have Medicare for all for people that are uncovered, but to replace the entire private system where companies provide health care for their employees would bankrupt us for a very long time,” Bloomberg said in Jan. 2019.",
			"“Medicare-for-all would provide quality health care for every single American, at a cheaper price to every one of us,” Gabbard said in an interview on ABC’s “The View.” “If folks want to get their own private insurance at the same time, they’re free to do that.”",
			"Klobuchar prefers offering a Medicaid-type plan, embracing a bill to create a Medicaid-based public health-care option on state insurance marketplaces.",
			"Patrick doesn't support Medicare-for-all 'in the terms we've been talking about,' he said in a Nov. 2019 CBS interview. He said he supports a public option.",
			"“I don’t believe that we need to tell people who are happy with their private health insurance that they can’t stay with it,” Steyer told The Post. “We can develop a public option that will provide better care at a lower cost so that people will choose that option.”"
		]
	}
];

///////////////////////////////
// MAIN FUNCTIONS
///////////////////////////////
startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions]; // created a new array
	getNewQuestion();
};

getNewQuestion = () => {
	currentQuestion = availableQuestions[questionCounter];
	question.innerText = currentQuestion.question; // adds the current question to the DOM
	choices.forEach(choice => {
		const number = choice.dataset["number"]; // this lets us access the dataset property's number from the HTML.
		choice.innerText = currentQuestion["choice" + number]; // adds the choices to the selection part of the DOM
		if (currentQuestion.choice3 === null) {
			document
				.getElementsByClassName("choice-container")[2]
				.classList.add("hidden");
		}
	});
	questionCounterText.innerText =
		questionCounter + 1 + "/" + (MAX_QUESTIONS + 1); // appends the questionCounter to the screen
};

///////////////////////////////
// UTILITY FUNCTIONS
///////////////////////////////
function removeAllChildren(Id) {
	let list = document.getElementById(Id);
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
}

function disableButton(btn) {
	document.getElementById(btn.id).disabled = true;
	alert("Button has been disabled.");
}

function clearInnerText() {
	candidatesNo.innerText = "";
	candidatesYes.innerText = "";
	canidatesResponseSection.innerText = "";
	questionResponse.innerText = "";
	nextButtonContainer.classList.add("hidden");
	removeAllChildren("hover-here");
}

function clearOpinionsInnerText() {
	candidatesOpinions.innerText = "";
	candidatesOpinionsHead.innerText = "";
}

function removeHiddenClass() {
	document
		.getElementsByClassName("choice-container")[0]
		.classList.remove("hidden");
	document
		.getElementsByClassName("choice-container")[1]
		.classList.remove("hidden");
	document
		.getElementsByClassName("choice-container")[2]
		.classList.remove("hidden");
}

function addHiddenClass() {
	document
		.getElementsByClassName("choice-container")[0]
		.classList.add("hidden");
	document
		.getElementsByClassName("choice-container")[1]
		.classList.add("hidden");
	document
		.getElementsByClassName("choice-container")[2]
		.classList.add("hidden");
}

function animateContainer() {
	nextButtonContainer.classList.remove("hidden");
	gsap.from(questionResponse, {
		opacity: 0,
		y: 20,
		duration: 0.5,
		ease: "power1.out"
	});
	gsap.from("#next-btn-container", {
		opacity: 0,
		duration: 1,
		ease: "power1.out"
	});
	gsap.from("#headshot-container", {
		opacity: 0,
		y: 30,
		duration: 1,
		ease: "power1.out"
	});
	gsap.from("#hover-here", {
		opacity: 0,
		delay: 0.35,
		y: 30,
		duration: 1,
		ease: "power1.out"
	});
}

// EVENT LISTNERS

choices.forEach(choice => {
	choice.addEventListener("click", e => {
		// for each choice to answers, we are adding an event listnener

		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"]; // this gives us the number from the dataset from the choice that we selected.
		questionCounter++; // increases the question counter HUD
		const classToApply = "correct";

		if (selectedAnswer == "1") {
			let hoverHereInner = document.createElement("div");
			hoverHereInner.classList.add("hover-here-inner");
			hoverHereInner.innerText =
				"Hover mouse over candidate photos for more infomation";
			document.getElementById("hover-here").appendChild(hoverHereInner);

			for (let i = 0; i < currentQuestion.choice1Headshots.length; i++) {
				var img = document.createElement("img");
				img.src = currentQuestion.choice1Headshots[i];
				img.classList.add("single-headshot");
				img.onmouseover = function() {
					candidatesOpinionsHead.innerText =
						currentQuestion.choice1Candidates[i];
					candidatesOpinions.innerText =
						currentQuestion.choice1CandidatesResponse[i];
					hoverHereInner.innerText = "";
				};
				img.onmouseout = function() {
					clearOpinionsInnerText();
					hoverHereInner.innerText =
						"Hover mouse over candidate photos for more infomation";
				};
				document.getElementById("headshot-yes").appendChild(img);
			}
			myCandidates.push([
				currentQuestion.question,
				currentQuestion.choice1Candidates
			]);
			mySingleCandidates.push(currentQuestion.choice1Candidates);
			answerContainer.push([currentQuestion.question, "Yes"]);
			questionResponse.innerText = currentQuestion.choice1;
			animateContainer();
		} else if (selectedAnswer == "2") {
			let hoverHereInner = document.createElement("div");
			hoverHereInner.classList.add("hover-here-inner");
			hoverHereInner.innerText =
				"Hover mouse over candidate photos for more infomation";
			document.getElementById("hover-here").appendChild(hoverHereInner);

			for (let i = 0; i < currentQuestion.choice2Headshots.length; i++) {
				var img = document.createElement("img");
				img.src = currentQuestion.choice2Headshots[i];
				img.classList.add("single-headshot");
				img.onmouseover = function() {
					candidatesOpinionsHead.innerText =
						currentQuestion.choice2Candidates[i];
					candidatesOpinions.innerText =
						currentQuestion.choice2CandidatesResponse[i];
					hoverHereInner.innerText = "";
				};
				img.onmouseout = function() {
					clearOpinionsInnerText();
					hoverHereInner.innerText =
						"Hover mouse over candidate photos for more infomation";
				};
				document.getElementById("headshot-yes").appendChild(img);
			}
			myCandidates.push([
				currentQuestion.question,
				currentQuestion.choice2Candidates
			]);
			mySingleCandidates.push(currentQuestion.choice2Candidates);
			questionResponse.innerText = currentQuestion.choice2;
			answerContainer.push([currentQuestion.question, "No"]);
			animateContainer();
		} else if (selectedAnswer == "3") {
			let hoverHereInner = document.createElement("div");
			hoverHereInner.classList.add("hover-here-inner");
			hoverHereInner.innerText =
				"Hover mouse over candidate photos for more infomation";
			document.getElementById("hover-here").appendChild(hoverHereInner);

			for (let i = 0; i < currentQuestion.choice3Headshots.length; i++) {
				var img = document.createElement("img");
				img.src = currentQuestion.choice3Headshots[i];
				img.classList.add("single-headshot");
				img.onmouseover = function() {
					candidatesOpinionsHead.innerText =
						currentQuestion.choice3Candidates[i];
					candidatesOpinions.innerText =
						currentQuestion.choice3CandidatesResponse[i];
					hoverHereInner.innerText = "";
				};
				img.onmouseout = function() {
					clearOpinionsInnerText();
					hoverHereInner.innerText =
						"Hover mouse over candidate photos for more infomation";
				};
				document.getElementById("headshot-yes").appendChild(img);
			}
			myCandidates.push([
				currentQuestion.question,
				currentQuestion.choice3Candidates
			]);
			mySingleCandidates.push(currentQuestion.choice3Candidates);
			questionResponse.innerText = currentQuestion.choice3;
			answerContainer.push([currentQuestion.question, "Partial"]);
			animateContainer();
		}

		selectedChoice.parentElement.classList.add(classToApply); // this selects the parent container of the text that we grabbed with the e.target, and applies classToApply to it.
		addHiddenClass();

		nextButton.addEventListener("click", () => {
			if (questionCounter === MAX_QUESTIONS + 1) {
				selectedChoice.parentElement.classList.remove(classToApply);
				clearInnerText();
				question.classList.add("hidden");
				document.getElementById("btn-end").classList.remove("hidden");
				removeAllChildren("headshot-yes");
				removeAllChildren("headshot-no");
				gameOver();

				// return window.location.assign('end.html')
			} else if (questionCounter < MAX_QUESTIONS + 1) {
				selectedChoice.parentElement.classList.remove(classToApply);
				clearInnerText();
				removeAllChildren("headshot-yes");
				removeAllChildren("headshot-no");
				removeHiddenClass();
				getNewQuestion();
			}
		});
	});
});

startGame();

///////////////////////////////
// END GAME FUNCTIONS
///////////////////////////////

function gameOver() {
	function calcScores() {
		bennet = 0;
		biden = 0;
		bloomberg = 0;
		buttigieg = 0;
		delaney = 0;
		gabbard = 0;
		klobuchar = 0;
		patrick = 0;
		sanders = 0;
		steyer = 0;
		warren = 0;
		yang = 0;

		let newArray = [].concat
			.apply([], mySingleCandidates)
			.join(", ")
			.split(", ")
			.sort();
		candidateData = occurances(newArray);

		for (let i = 0; i < newArray.length; i++) {
			if (newArray[i] == "Michael Bennet") {
				bennet += 1;
			} else if (newArray[i] == "Joe Biden") {
				biden += 1;
			} else if (newArray[i] == "Michael Bloomberg") {
				bloomberg += 1;
			} else if (newArray[i] == "Pete Buttigieg") {
				buttigieg += 1;
			} else if (newArray[i] == "John Delaney") {
				delaney += 1;
			} else if (newArray[i] == "Tulsi Gabbard") {
				gabbard += 1;
			} else if (newArray[i] == "Amy Klobuchar") {
				klobuchar += 1;
			} else if (newArray[i] == "Deval Patrick") {
				patrick += 1;
			} else if (newArray[i] == "Bernie Sanders") {
				sanders += 1;
			} else if (newArray[i] == "Tom Steyer") {
				steyer += 1;
			} else if (newArray[i] == "Elizabeth Warren") {
				warren += 1;
			} else if (newArray[i] == "Andrew Yang") {
				yang += 1;
			}
		}

		let output = Object.entries(candidateData).map(([candidate, votes]) => ({
			candidate,
			votes
		}));
		let sortedOutput = output.sort((a, b) => (a.votes > b.votes ? 1 : -1));
		// console.log(sortedOutput);

		document.getElementById("cand-1").innerText =
			sortedOutput[sortedOutput.length - 1].candidate;
		document.getElementById("cand-2").innerText =
			sortedOutput[sortedOutput.length - 2].candidate;
		document.getElementById("cand-3").innerText =
			sortedOutput[sortedOutput.length - 3].candidate;
		document.getElementById("cand-4").innerText =
			sortedOutput[sortedOutput.length - 4].candidate;
	}
	calcScores();
}

function occurances(array) {
	var result = {};
	if (array instanceof Array) {
		// Check if input is array.
		array.forEach(function(v, i) {
			if (!result[v]) {
				// Initial object property creation.
				result[v] = 1; // Create an array for that property.
			} else {
				// Same occurrences found.
				result[v]++; // Fill the array.
			}
		});
	}
	return result;
}

function showTally() {
	gsap.from("#final-text-wrapper", {
		opacity: 0,
		delay: 0.1,
		y: 30,
		duration: 1,
		ease: "power1.out",
		stagger: 0.5
	});
	gsap.from("#all-counting-num", {
		opacity: 0,
		delay: 0.5,
		y: 30,
		duration: 1,
		ease: "power1.out",
		stagger: 0.5
	});

	gsap.from("#final-chart-wrapper", {
		opacity: 0,
		delay: 0.75,
		y: 30,
		duration: 1,
		ease: "power1.out",
		stagger: 0.5
	});

	gsap.from(".all-results-container", {
		opacity: 0,
		delay: 0.6,
		y: 30,
		duration: 1,
		ease: "power1.out",
		stagger: 0.5
	});

	document.getElementById("btn-end").classList.add("hidden");
	document.getElementById("main-game").classList.add("hidden");
	document.getElementById("myChart").setAttribute("height", "400");
	document.getElementById("all-the-results").classList.remove("hidden");
	document.getElementById("final-chart-wrapper").classList.remove("hidden");
	document.getElementById("hide-this").classList.remove("hidden");
	for (let i = 0; i < MAX_QUESTIONS + 1; i++) {
		addCandidatesToTable(
			"table-question-" + [i],
			"table-question-" + [i] + "-response",
			"table-candidates-" + [i],
			"canidate-name-results-" + [i],
			[i]
		);
	}
	createCharts();
	createBarChart();
	createCounters();
	createMiniCharts();
}

function addCandidatesToTable(
	targetQuestionDiv,
	targetResponseDiv,
	targetAppendDiv,
	nameDiv,
	iterationNumber
) {
	if (answerContainer[iterationNumber][1] == "Yes") {
		document.getElementById(targetQuestionDiv).innerText =
			answerContainer[iterationNumber][0];
		document.getElementById(targetResponseDiv).innerText =
			questions[iterationNumber].choice1;
		for (
			let i = 0;
			i < questions[iterationNumber].choice1Headshots.length;
			i++
		) {
			var img = document.createElement("img");
			img.src = questions[iterationNumber].choice1Headshots[i];
			img.classList.add("tiny-headshot");
			img.onmouseover = function() {
				document.getElementById(nameDiv).classList.remove("hidden");
				document.getElementById(nameDiv).innerText =
					questions[iterationNumber].choice1Candidates[i];
			};
			img.onmouseout = function() {
				document.getElementById(nameDiv).innerText = "";
				document.getElementById(nameDiv).classList.add("hidden");
			};
			document.getElementById(targetAppendDiv).appendChild(img);
		}
	} else if (answerContainer[iterationNumber][1] == "No") {
		document.getElementById(targetQuestionDiv).innerText =
			answerContainer[iterationNumber][0];
		document.getElementById(targetResponseDiv).innerText =
			questions[iterationNumber].choice2;
		for (
			let i = 0;
			i < questions[iterationNumber].choice2Headshots.length;
			i++
		) {
			var img = document.createElement("img");
			img.src = questions[iterationNumber].choice2Headshots[i];
			img.classList.add("tiny-headshot");
			img.onmouseover = function() {
				document.getElementById(nameDiv).classList.remove("hidden");
				document.getElementById(nameDiv).innerText =
					questions[iterationNumber].choice2Candidates[i];
			};
			img.onmouseout = function() {
				document.getElementById(nameDiv).innerText = "";
				document.getElementById(nameDiv).classList.add("hidden");
			};
			document.getElementById(targetAppendDiv).appendChild(img);
		}
	} else if (answerContainer[iterationNumber][1] == "Partial") {
		document.getElementById(targetQuestionDiv).innerText =
			answerContainer[iterationNumber][0];
		document.getElementById(targetResponseDiv).innerText =
			questions[iterationNumber].choice3;
		for (
			let i = 0;
			i < questions[iterationNumber].choice3Headshots.length;
			i++
		) {
			var img = document.createElement("img");
			img.src = questions[iterationNumber].choice3Headshots[i];
			img.classList.add("tiny-headshot");
			img.onmouseover = function() {
				document.getElementById(nameDiv).classList.remove("hidden");
				document.getElementById(nameDiv).innerText =
					questions[iterationNumber].choice3Candidates[i];
			};
			img.onmouseout = function() {
				document.getElementById(nameDiv).innerText = "";
				document.getElementById(nameDiv).classList.add("hidden");
			};
			document.getElementById(targetAppendDiv).appendChild(img);
		}
	}
}

///////////////////////////////
// CHART FUNCTIONS
///////////////////////////////

function createCharts() {
	gsap.from("#myChart", { opacity: 0, y: 30, duration: 1, ease: "power1.out" });
	gsap.from("#btn-mod-here", {
		opacity: 0,
		y: 30,
		duration: 1,
		ease: "power1.out"
	});

	function chooseGraphColor(candidateVariable) {
		if (candidateVariable > 11) {
			return "#007ea3";
		} else if (candidateVariable > 9) {
			return "#00a5d9";
		} else if (candidateVariable > 7) {
			return "#00b9e7";
		} else if (candidateVariable > 5) {
			return "#31c3e3";
		} else if (candidateVariable > 3) {
			return "#9fdbed";
		}
	}

	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: "doughnut",
		data: {
			labels: [
				"Bennet",
				"Biden",
				"Bloomberg",
				"Buttigieg",
				"Gabbard",
				"Klobuchar",
				"Patrick",
				"Sanders",
				"Steyer",
				"Warren",
				"Yang"
			],
			datasets: [
				{
					label: "# of Votes",
					data: [
						bennet,
						biden,
						bloomberg,
						buttigieg,
						gabbard,
						klobuchar,
						patrick,
						sanders,
						steyer,
						warren,
						yang
					],
					backgroundColor: [
						chooseGraphColor(bennet),
						chooseGraphColor(biden),
						chooseGraphColor(bloomberg),
						chooseGraphColor(buttigieg),
						chooseGraphColor(gabbard),
						chooseGraphColor(klobuchar),
						chooseGraphColor(patrick),
						chooseGraphColor(sanders),
						chooseGraphColor(steyer),
						chooseGraphColor(warren),
						chooseGraphColor(yang)
					]
				}
			]
		},
		options: {
			title: {
				display: true,
				text: "Your Positions vs. Candidate Positions - All Candidates"
			},
			animation: {
				animateRotate: true,
				animateScale: false,
				easing: "easeOutQuart",
				duration: 1000
			},
			legend: {
				position: "bottom",
				display: false
			},
			scales: {
				ticks: {
					beginAtZero: true
				}
			}
		}
	});
	let topCandidatesBtn = document.createElement("button");
	topCandidatesBtn.innerText = "Show Top Candidates";
	topCandidatesBtn.classList.add("append-btn");
	topCandidatesBtn.onclick = function() {
		console.log("Top Candidates clicked!");
		myChart.data.datasets[0].data = [
			biden,
			bloomberg,
			buttigieg,
			sanders,
			warren
		];
		myChart.data.labels = [
			"Biden",
			"Bloomberg",
			"Buttigieg",
			"Sanders",
			"Warren"
		];
		myChart.data.datasets[0].backgroundColor = [
			chooseGraphColor(biden),
			chooseGraphColor(bloomberg),
			chooseGraphColor(buttigieg),
			chooseGraphColor(sanders),
			chooseGraphColor(warren)
		];
		myChart.options.title.text =
			"Your Positions vs. Candidate Positions - Top Candidates";
		myChart.update();
	};
	let topCandidatesAppend = document.getElementById("btn-mod-here");
	topCandidatesAppend.appendChild(topCandidatesBtn);

	let allCandidatesBtn = document.createElement("button");
	allCandidatesBtn.innerText = "Reset";
	allCandidatesBtn.classList.add("append-btn");
	allCandidatesBtn.onclick = function() {
		console.log("All Candidates clicked!");
		myChart.data.datasets[0].data = [
			bennet,
			biden,
			bloomberg,
			buttigieg,
			gabbard,
			klobuchar,
			patrick,
			sanders,
			steyer,
			warren,
			yang
		];
		myChart.data.labels = [
			"Bennet",
			"Biden",
			"Bloomberg",
			"Buttigieg",
			"Gabbard",
			"Klobuchar",
			"Patrick",
			"Sanders",
			"Steyer",
			"Warren",
			"Yang"
		];
		myChart.data.datasets[0].backgroundColor = [
			chooseGraphColor(bennet),
			chooseGraphColor(biden),
			chooseGraphColor(bloomberg),
			chooseGraphColor(buttigieg),
			chooseGraphColor(gabbard),
			chooseGraphColor(klobuchar),
			chooseGraphColor(patrick),
			chooseGraphColor(sanders),
			chooseGraphColor(steyer),
			chooseGraphColor(warren),
			chooseGraphColor(yang)
		];
		myChart.options.title.text =
			"Your Positions vs. Candidate Positions - All Candidates";
		myChart.update();
	};
	let allCandidatesAppend = document.getElementById("btn-mod-here");
	allCandidatesAppend.appendChild(allCandidatesBtn);
}

function createBarChart() {
	var ctx = document.getElementById("myChart2");
	gsap.from("#myChart2", {
		opacity: 0,
		y: 30,
		duration: 1,
		delay: 0.3,
		ease: "power1.out"
	});
	gsap.from("#btn-mod-2-here", {
		opacity: 0,
		y: 30,
		duration: 1,
		delay: 0.3,
		ease: "power1.out"
	});
	var myChart2 = new Chart(ctx, {
		type: "horizontalBar",
		data: {
			labels: [
				"Biden",
				"Sanders",
				"Warren",
				"Bloomberg",
				"Buttigieg",
				"Yang",
				"Klobuchar",
				"Steyer",
				"Gabbard",
				"Bennet",
				"Patrick"
			],
			datasets: [
				{
					label: "Percentage in National Poll",
					data: [27.2, 23.5, 15, 8, 6.7, 4.7, 4.3, 1.8, 1.5, 0.5, 0.3],
					backgroundColor: [
						"#007ea3",
						"#00a5d9",
						"#00b9e7",
						"#31c3e3",
						"#9fdbed"
					]
				}
			]
		},
		options: {
			title: {
				display: true,
				text: "National Polls"
			},
			animation: {
				animateRotate: false,
				animateScale: false,
				easing: "easeOutQuart",
				duration: 1500
			},

			legend: {
				position: "bottom",
				display: false
			},
			scales: {
				xAxes: [
					{
						gridLines: {
							offsetGridLines: false
						}
					}
				]
			}
		}
	});

	let Iowa = document.createElement("button");
	Iowa.innerText = "Iowa Polls";
	Iowa.classList.add("append-btn");
	Iowa.onclick = function() {
		console.log("Coloroado clicked!");
		myChart2.data.datasets[0].data = [23, 19.3, 16.8, 15.5, 9, 3.3, 3, 1.5];
		myChart2.data.labels = [
			"Sanders",
			"Biden",
			"Buttigieg",
			"Warren",
			"Klobuchar",
			"Yang",
			"Steyer",
			"Gabbard"
		];
		myChart2.options.title.text = "Iowa Polls";
		myChart2.update();
	};
	let IowaPolls = document.getElementById("btn-mod-2-here");
	IowaPolls.appendChild(Iowa);

	let newHampshire = document.createElement("button");
	newHampshire.innerText = "New Hampshire Polls";
	newHampshire.classList.add("append-btn");
	newHampshire.onclick = function() {
		console.log("Coloroado clicked!");
		myChart2.data.datasets[0].data = [
			26.5,
			17.5,
			14.3,
			13.7,
			6.7,
			5.2,
			4.2,
			3.5
		];
		myChart2.data.labels = [
			"Sanders",
			"Biden",
			"Warren",
			"Buttigieg",
			"Klobuchar",
			"Gabbard",
			"Yang",
			"Steyer"
		];
		myChart2.options.title.text = "New Hampshire Polls";
		myChart2.update();
	};
	let newHampshirePolls = document.getElementById("btn-mod-2-here");
	newHampshirePolls.appendChild(newHampshire);

	let nevada = document.createElement("button");
	nevada.innerText = "Nevada Polls";
	nevada.classList.add("append-btn");
	nevada.onclick = function() {
		console.log("Nevada clicked!");
		myChart2.data.datasets[0].data = [21, 17.5, 11.5, 10, 7, 4, 3, 1, 5];
		myChart2.data.labels = [
			"Biden",
			"Sanders",
			"Warren",
			"Steyer",
			"Buttigieg",
			"Yang",
			"Klobuchar",
			"Gabbard"
		];
		myChart2.options.title.text = "Nevada Polls";
		myChart2.update();
	};
	let nevadaPolls = document.getElementById("btn-mod-2-here");
	nevadaPolls.appendChild(nevada);

	let resetBtn = document.createElement("button");
	resetBtn.innerText = "National Polls";
	resetBtn.classList.add("append-btn");
	resetBtn.onclick = function() {
		console.log("Reset Row clicked!");
		myChart2.data.datasets[0].data = [
			27.2,
			23.5,
			15,
			8,
			6.7,
			4.7,
			4.3,
			1.8,
			1.5,
			0.5,
			0.3
		];
		myChart2.data.labels = [
			"Biden",
			"Sanders",
			"Warren",
			"Bloomberg",
			"Buttigieg",
			"Yang",
			"Klobuchar",
			"Steyer",
			"Gabbard",
			"Bennet",
			"Patrick"
		];
		myChart2.options.title.text = "National Polls";
		myChart2.update();
	};
	let NationalPollAppendReset = document.getElementById("btn-mod-2-here");
	NationalPollAppendReset.appendChild(resetBtn);
}

function createMiniCharts() {
	document.getElementById("idk").classList.remove("hidden");
	gsap.from(".smallChart", {
		opacity: 0,
		y: 30,
		duration: 1,
		delay: 0.5,
		ease: "power1.out"
	});
	let topCandidiates = ["Biden", "Sanders", "Warren", "Buttigieg", "Bloomberg"];
	let topCandidiatesData = [
		[50.1, 44.7],
		[49, 45.3],
		[47.7, 45.9],
		[45.9, 45.6],
		[49.5, 44.3]
	];
	for (let i = 0; i < 5; i++) {
		var ctx = document.getElementById("smallChart-" + [i]);
		var smallChart = new Chart(ctx, {
			type: "doughnut",
			data: {
				labels: [topCandidiates[i], "Trump"],
				datasets: [
					{
						label: "# of Votes",
						data: [topCandidiatesData[i][0], topCandidiatesData[i][1]],
						backgroundColor: ["#00b9e7", "#c45353"]
					}
				]
			},
			options: {
				title: {
					display: true,
					text: "Trump vs. " + topCandidiates[i]
				},
				animation: {
					animateRotate: true,
					animateScale: true,
					easing: "easeOutQuart",
					duration: 1000
				},
				legend: {
					position: "bottom",
					display: false
				},
				scales: {
					ticks: {
						beginAtZero: true
					}
				}
			}
		});
	}
}

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
let width = window.innerWidth;

function scrollOffset() {
	console.log(width);
	if (width > 851) {
		return 500;
	} else {
		return 800;
	}
}

///////////////////////////////
// COUNTER FUNCTIONS
///////////////////////////////

let iowaCaucues = new Date(2020, 1, 3);
let hampshirePrimary = new Date(2020, 1, 11);
let nevadaCaucues = new Date(2020, 1, 22);
let southCarPrimary = new Date(2020, 1, 29);
let superTuesday = new Date(2020, 2, 3);
let election = new Date(2020, 10, 3);
let inauguration = new Date(2021, 0, 20);

function createCounters() {
	gsap.from(".number-container", {
		opacity: 0,
		duration: 1,
		ease: "power1.out"
	});
	document.getElementById("all-counting-num").classList.remove("hidden");
	getScrollingDates(iowaCaucues, "Feb 3rd", "iowa-caucues");
	getScrollingDates(hampshirePrimary, "Feb 11th", "hampshire-primary");
	getScrollingDates(nevadaCaucues, "Feb 22nd", "nevada-caucues");
	getScrollingDates(southCarPrimary, "Feb 29th", "southcar-primary");
	getScrollingDates(superTuesday, "March 3rd", "super-tuesday");
	getScrollingDates(election, "Nov 3rd", "election-day");
}

function getScrollingDates(occassion, actualDate, targetDiv) {
	var Cont = { val: 0 };
	const target = targetDiv;
	let today = new Date();
	let daysTill = Math.floor((occassion - today) / (24 * 60 * 60 * 1000)) + 1;

	gsap.to(Cont, 3, {
		delay: 0,
		val: daysTill,
		roundProps: "val",
		onUpdate: function() {
			document.getElementById(target).innerHTML = Cont.val;
		}
	});
}

///////////////////////////////
// SCROLL MAGIC
///////////////////////////////

tl.from("#final-chart-wrapper-lower", 2.5, {
	opacity: 0,
	y: 30,
	ease: "power1.out"
});
tl.from("#all-the-results", 2.5, {
	opacity: 0,
	y: 30,
	ease: "power1.out"
});

var scene = new ScrollMagic.Scene({
	triggerElement: "#all-counting-num",
	duration: "60%",
	triggerHook: 0.25,
	offset: scrollOffset()
})
	.setTween(tl)
	.addTo(controller);

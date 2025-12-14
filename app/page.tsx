import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {

  const allGames = [
    "Teen Patti", "Double", "Rummy", "Fruit Line", "Roulette", "Poker",
    "Mines", "Fishing Rush", "7 Up Down", "Dragon vs Tiger", "Car Roulette", "Sports",
    "Zoo Roulette", "Rattling Gems", "Best of Five", "Sweet Bonanza", "10 Cards", "Blackjack",
    "TeenPatti 20-20", "Crash", "Spin of Fortune", "777 Bingo", "God of Fortune", "Ludo",
    "Andar Bahar", "Domino", "Variation", "Baccarat"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* What is 3 Patti Loot APK */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-6 gradient-text">
              What is 3 Patti Loot APK?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-4">
                3 Patti Loot APK is an amazing online earning app where you can play card games and earn real money. 
                This app is packed with more than 20 card games like Ludo, Mines, Dragon Tiger, Rummy, Andar Bahar, 
                and more. Moreover, you can bet on live sports events such as cricket and earn money.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                You can also earn money through referrals and daily logins. This app gives you every opportunity to 
                earn money. So, what are you waiting for, avail yourself of this opportunity and start earning money 
                by playing games.
              </p>
              <p className="text-lg text-gray-300">
                This app offers a variety of channels to deposit and withdraw your money. For instance, you can use 
                your bank account, EasyPaisa, and JazzCash. Moreover, the deposits and withdrawals are done quickly 
                and easily. Further, this app supports Android devices only and is not available for iOS.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gaming-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-gaming font-bold mb-3">20+ Card Games</h3>
              <p className="text-gray-400">
                Play Teen Patti, Rummy, Ludo, Dragon Tiger, and many more exciting games all in one app.
              </p>
            </div>

            <div className="glass rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gaming-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-gaming font-bold mb-3">Real Money Earning</h3>
              <p className="text-gray-400">
                Win real cash prizes and withdraw instantly to your EasyPaisa or JazzCash account 24/7.
              </p>
            </div>

            <div className="glass rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gaming-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-gaming font-bold mb-3">Works on 2G Network</h3>
              <p className="text-gray-400">
                3Patti app works smoothly even on a slow internet connection. It works perfectly even on 2G.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features of 3 Patti Loot */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            Features of 3 Patti Loot
          </h2>
          <p className="text-xl text-gray-300">
            The Teen Patti Loot is packed with amazing features, and you can benefit from them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Vast Game Collection</h3>
            <p className="text-gray-300">
              3Patti Loot Pakistan offers a vast collection of games. So, you have more options to play. 
              This app includes more than 20 games which include Ludo, Mines, Dragon Tiger, Rummy, 
              Andar Bahar, Teen Patti, and many more. So, play your favorite game and start earning money.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Refer and Earn</h3>
            <p className="text-gray-300">
              It provides every possible opportunity to earn money. With this app, you can invite your 
              friends and earn a commission. You get a 3% commission for each game they win or lose. 
              Share your referral link and build your affiliate network.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Deposits and Withdrawals 24/7</h3>
            <p className="text-gray-300">
              You can deposit and withdraw your money anytime you wish. Moreover, Teen Patti Loot offers 
              many deposit and withdrawal channels including EasyPaisa, JazzCash, and bank accounts. 
              All transactions are processed instantly.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Sports Betting Bonus</h3>
            <p className="text-gray-300">
              You can earn money by betting on live sports events like cricket. You can invest your money 
              in live events and earn good money. Get sports commission when your referrals bet on sports.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Spinning Wheel</h3>
            <p className="text-gray-300">
              Deposit money to your accounts and get equal points for spinning. Then spin the wheel and 
              get your rewards for free. There are 3 types of wheels: silver, gold, and diamond. Try your luck daily!
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Multiple Languages</h3>
            <p className="text-gray-300">
              People from different backgrounds use this application. To make this application accessible 
              to everyone, it is available in different languages. You can easily switch between English and Urdu.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Login Incentive</h3>
            <p className="text-gray-300">
              If you have run out of cash, there is no need to panic because you can claim the daily login 
              reward. Open the application each day and claim the free login gift to keep playing.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Customer Support 24/7</h3>
            <p className="text-gray-300">
              To make the application effective there are customer support members available. This team is 
              specifically dedicated to sorting out the queries and problems of users anytime, day or night.
            </p>
          </div>
        </div>
      </section>

      {/* Games in 3 Patti Loot */}
      <section id="games" className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Games in 3 Patti Loot
            </h2>
            <p className="text-xl text-gray-300">
              Everyone has a different taste of games and skills accordingly. Users will get to play 
              multiple games in this single application
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allGames.map((game, index) => (
              <div key={index} className="glass rounded-lg p-4 text-center hover:bg-gaming-accent/10 transition-all cursor-pointer">
                <span className="text-2xl mb-2 block">🎴</span>
                <span className="font-gaming font-bold text-sm">{game}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Download and Install */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            How to Download and Install 3 Patti Loot App?
          </h2>
          <p className="text-xl text-gray-300">
            This app is easy to install and use on any Android device
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <img src="/3patti-loot.webp" alt="3 Patti Loot App Screenshot" className="rounded-lg shadow-2xl" />
          </div>
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-gaming font-bold mb-4 gradient-text">Download Now & Get PKR 5 Free!</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of players earning real money daily. Download the app, create your account, 
              and start playing your favorite card games instantly!
            </p>
            <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary w-full text-center block">
              📱 Download APK Now
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-lg p-8 mb-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Download APK File</h3>
                  <p className="text-gray-400">Click on the download button provided to download the app to your device.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Enable Unknown Sources</h3>
                  <p className="text-gray-400">During installation, allow installation from unknown sources in your device settings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Install the App</h3>
                  <p className="text-gray-400">Tap on the downloaded APK file and it will start installing on your device.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Launch & Register</h3>
                  <p className="text-gray-400">Once installation is complete, launch the app, tap on guest button, and your device will be registered.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Deposit & Start Playing</h3>
                  <p className="text-gray-400">After that, you will be able to deposit cash and start playing games to earn money.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary text-lg px-10 py-4 inline-block">
              📱 Download 3 Patti Loot APK Now
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Get PKR 5 Bonus Now | Android 5.0+ Required | 55MB Size
            </p>
          </div>
        </div>
      </section>

      {/* How to Create Account */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              How to Create Account in 3 Patti Loot?
            </h2>
            <p className="text-xl text-gray-300">
              It is simple to create your account in 3 Patti Loot
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-4 text-gaming-accent">New Account</h3>
              <ol className="space-y-3 list-decimal list-inside text-gray-300">
                <li>Launch the app and click on "Play as a Guest" button</li>
                <li>Your device will get registered with the game</li>
                <li>Tap on your profile section in the top left corner</li>
                <li>Click on the option to bind your email address</li>
                <li>Enter your email address and get OTP</li>
                <li>Verify the OTP code sent to your email</li>
                <li>Set a strong password and confirm</li>
                <li>Your account is ready to use!</li>
              </ol>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-4 text-gaming-accent">Existing Account</h3>
              <p className="text-gray-300 mb-4">
                If you already have an account, you can use the "Login" option at the beginning to recover 
                your account.
              </p>
              <p className="text-gray-300 mb-4">
                To use this feature, you need to bind your email to the game ID. You can bind your email 
                by tapping on the profile section.
              </p>
              <p className="text-gray-300">
                <strong>Important:</strong> Always bind your email to prevent losing access to your account 
                if you lose your phone or need to change devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit & Withdraw */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">
              How to Deposit Money?
            </h2>
            <div className="glass rounded-lg p-6">
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">1.</span>
                  <span>Click on the "Buy/Shop" button in the app</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">2.</span>
                  <span>Select the type of account: EasyPaisa or JazzCash</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">3.</span>
                  <span>Choose the number of chips you want to purchase (Minimum PKR 50)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">4.</span>
                  <span>Click on add chips button and it will open a payment page</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">5.</span>
                  <span>Provide your account number and click on the pay button</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">6.</span>
                  <span>Complete the transaction with your account password</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">7.</span>
                  <span>Money will automatically transfer to your game profile</span>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">
              How to Withdraw Money?
            </h2>
            <div className="glass rounded-lg p-6">
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">1.</span>
                  <span>Click on the "Withdraw" button at the bottom</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">2.</span>
                  <span>You will see your withdrawable amount and total balance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">3.</span>
                  <span>Select account type: EasyPaisa or JazzCash</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">4.</span>
                  <span>If not bound, click "+Wallet" and add your account details</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">5.</span>
                  <span>Enter the amount you want to withdraw</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">6.</span>
                  <span>Click on proceed button to complete withdrawal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">7.</span>
                  <span>Check transaction status from the records section</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Free Bonuses */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Free Bonuses in 3 Patti Loot
            </h2>
            <p className="text-xl text-gray-300">
              Here is the list of different types of rewards this app offers to gamers
            </p>
          </div>

          <div className="mb-12">
            <img src="/refer-and-earn.webp" alt="Refer and Earn 3% Commission" className="rounded-lg shadow-2xl mx-auto max-w-2xl" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-gaming font-bold mb-3">Signup Bonus</h3>
              <p className="text-gray-400 mb-2">One-time welcome reward for new users</p>
              <p className="text-2xl font-bold text-gaming-accent">PKR 5</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-gaming font-bold mb-3">Daily Login Reward</h3>
              <p className="text-gray-400 mb-2">Available daily for all users</p>
              <p className="text-2xl font-bold text-gaming-accent">Free Chips</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-gaming font-bold mb-3">Referral Commission</h3>
              <p className="text-gray-400 mb-2">Earn from friends' gameplay</p>
              <p className="text-2xl font-bold text-gaming-accent">3% Forever</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎡</div>
              <h3 className="text-xl font-gaming font-bold mb-3">Spinning Wheel</h3>
              <p className="text-gray-400 mb-2">Daily and weekly chances</p>
              <p className="text-2xl font-bold text-gaming-accent">Win Jackpot</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-gaming font-bold mb-3">Progress Reward</h3>
              <p className="text-gray-400 mb-2">Weekly income based reward</p>
              <p className="text-2xl font-bold text-gaming-accent">Extra Cash</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🏏</div>
              <h3 className="text-xl font-gaming font-bold mb-3">Sports Commission</h3>
              <p className="text-gray-400 mb-2">From referrals' sports bets</p>
              <p className="text-2xl font-bold text-gaming-accent">Bonus%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Tricks */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            Tips and Tricks to Win
          </h2>
          <p className="text-xl text-gray-300">
            Follow these tips to maximize your earnings and enjoyment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Choose Games Wisely</h3>
                <p className="text-gray-400 text-sm">Before trying any game, check the gaming list and choose games that match your preferences and skills.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Master One Game First</h3>
                <p className="text-gray-400 text-sm">Stick to one or two games until you master them. Learn about gameplay, rules, and game mechanics thoroughly.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Manage Your Bankroll</h3>
                <p className="text-gray-400 text-sm">Start with investing a small amount. Never spend more than you have initially invested. Set limits and stick to them.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎁</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Use Free Bonuses</h3>
                <p className="text-gray-400 text-sm">Avail free chips from bonuses and rewards. Get your welcome bonus so you can play games for free initially.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👥</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Learn from Others</h3>
                <p className="text-gray-400 text-sm">Connect with others in multiplayer mode and learn different game strategies from experienced players.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔄</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Practice Regularly</h3>
                <p className="text-gray-400 text-sm">Practice the games regularly and be patient. Don't be overwhelmed if you don't win immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Is 3 Patti Loot real or fake?</h3>
              <p className="text-gray-300">Yes, 3 Patti Loot APK is 100% legitimate and offers you the opportunity to earn real cash. Moreover, it provides a safe and secure environment for players. All transactions are encrypted and protected.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Is there a 3 Patti Loot hack or Mod APK?</h3>
              <p className="text-gray-300">No, there is no mod available and we strongly advise against using any. Our game is fully secure and hack-proof with RNG certification. We recommend you download only from reliable sources to ensure safety.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">What is the minimum deposit amount?</h3>
              <p className="text-gray-300">You can deposit as low as PKR 50 to your game account. There are various chip packages available starting from PKR 50.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">What is the maximum withdrawal amount?</h3>
              <p className="text-gray-300">You can withdraw as much as you want because the application does not block your withdrawal requests. However, it depends on the limit of your EasyPaisa or JazzCash accounts.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Can I play on iOS devices?</h3>
              <p className="text-gray-300">Currently, 3 Patti Loot is available for Android devices only. iOS version is not available at the moment.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">How long does withdrawal take?</h3>
              <p className="text-gray-300">Withdrawals are processed instantly. Your money will be transferred to your EasyPaisa or JazzCash account within minutes after approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="glass rounded-lg p-12 text-center">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            Learn More About 3 Patti Loot
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive guides on signup, deposits, withdrawals, tips & tricks, and game comparisons.
          </p>
          <Link href="/blog" className="btn-primary text-lg inline-block">
            Read Our Blog & Guides →
          </Link>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-gaming font-bold mb-6 gradient-text">
            Conclusion
          </h2>
          <div className="glass rounded-lg p-8 text-left">
            <p className="text-lg text-gray-300 mb-4">
              In conclusion, <strong>3 Patti Loot Pakistan</strong> is the best online earning app where you can play games and earn money. This app provides you with a vast collection of games like Roulette, Andar Bahar, Teen Patti, Car Roulette, Ludo, and many others.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Moreover, you can refer this app to others and can make good money through referrals with 3% commission. Further, it offers many deposit and withdrawal channels which are available 24/7 including EasyPaisa and JazzCash.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              The app is safe, secure, and features RNG-certified games ensuring 100% fair play. With HD graphics, smooth gameplay that works even on 2G networks, and multiple language support, 3 Patti Loot provides the best gaming experience.
            </p>
            <p className="text-lg text-gray-300">
              So, this app is the best choice if you want to earn money by playing simple card games. Download now, get your PKR 5 welcome bonus, and start your journey to winning real money today!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gaming-accent/20 to-gaming-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-4">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download 3 Patti Loot APK now and get PKR 5 welcome bonus instantly!
          </p>
          <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary text-lg px-12 py-6 mb-4 inline-block">
            📱 Download 3 Patti Loot APK - FREE
          </a>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Android 5.0+</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>55MB File Size</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Free Download</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>PKR 5 Bonus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


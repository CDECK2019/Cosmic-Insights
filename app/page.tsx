import StarryBackground from './components/StarryBackground';

export default function Home() {
  return (
    <StarryBackground>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Cosmic Insights</h1>
        </header>
        {/* Rest of your content */}
      </div>
    </StarryBackground>
  );
}
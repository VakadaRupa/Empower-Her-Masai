import MessageCard from './MessageCard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Message Board</h1>
      
      {/* Passing different data via props */}
      <MessageCard 
        title="Welcome!" 
        message="Thanks for joining the Empower-Her program. We are excited to have you!" 
      />
      
      <MessageCard 
        title="Quick Update" 
        message="Don't forget to push your code to GitHub before the deadline." 
      />
      
      <MessageCard 
        title="Achievement Unlocked" 
        message="You have successfully mastered React props and components!" 
      />

      <MessageCard 
        title="Helpful Tip" 
        message="Keep your components small and focused on one specific task." 
      />
    </div>
  );
}

export default App;
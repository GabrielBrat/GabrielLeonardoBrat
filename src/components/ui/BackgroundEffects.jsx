function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 dark:opacity-90">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="particle-bg pointer-events-none fixed inset-0 -z-10" />
    </>
  );
}

export default BackgroundEffects;

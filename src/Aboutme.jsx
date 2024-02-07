import React from 'react'

function Aboutme() {
  return (
    <div className="bg- min-h-screen bg-slate-400">
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
                <img src="https://avatars.githubusercontent.com/u/137649234?v=4" alt="Profile" className="rounded-lg mb-4 md:mb-0 md:mr-4" />
            </div>
            <div className="md:w-2/3">
                <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante elit. Vivamus suscipit magna eget turpis malesuada scelerisque. Sed ac libero sed nisi sagittis feugiat id in libero.</p>
                <p className="text-lg mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Integer euismod volutpat nunc, nec consequat felis varius vel. Fusce vestibulum elit vel dui bibendum eleifend. Suspendisse potenti.</p>
                <p className="text-lg">Nullam feugiat risus et erat tristique, nec vestibulum orci posuere. Sed at justo aliquet, fermentum nisi nec, congue nisi. Morbi venenatis felis non justo faucibus, euismod malesuada est luctus.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Aboutme
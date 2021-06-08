

function App() {
  return (

<div className="max-w-sm rounded overflow-hidden shadow-lg ">
<img src="https://source.unsplash.com/random" 
alt="" 
className="w-full"/>
<div className="px-6 py-4">
  <div className="font-bold text-purple-500 text-xl mb-2">
    photo by Jhon doe 
  </div>
  <ul>
    <li>
    <strong>views: 4000</strong>
    </li>
    <li>
    <strong>downloads: 300</strong>
    </li>
    <li>
    <strong>likes: 200</strong>
    </li>
  </ul>

</div>
<div className="px-6 py-4">
  <span className="inline-block bg-gray-200 rounded-full px3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
  <span className="inline-block bg-gray-200 rounded-full px3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
  <span className="inline-block bg-gray-200 rounded-full px3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
</div>
</div>
  );
}

export default App;
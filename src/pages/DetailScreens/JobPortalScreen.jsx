import TopSection from "../../components/detailsComponents/TopSection";
import ImageGridSection from "../../components/detailsComponents/ImageGridSection";
import CodeSnipptet from "../../components/detailsComponents/CodeSnippet";
import MediumLink from "../../components/detailsComponents/MediumLink";
import { Projects } from "../../../utils/data";

export default function DnDScreen() {
  const project = Projects[2]; //Change this to match

  return (
    <main className="px-8 pb-12 pt-20 text-white flex flex-col gap-y-8">
      <TopSection project={project} />
      <ImageGridSection images={project.images} video={project.video} />

      <div className="flex flex-col justify-between pt-20 gap-4 md:flex-row md:items-end">
        <h1 className="headline-text font-[700]">
          A bit of code from this project
        </h1>
        <MediumLink link={project.mediumLink} />
      </div>

      {/* Setting up database */}
      <h1 className="subheadline-text">Setting up database</h1>
      <p className="body-text">
        Firstly you need to setup the database, which in my case is MySQL. This
        can simply be completed by going into the .env file. And simply edit the
        marked fields.
      </p>

      <CodeSnipptet
        code="
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE={ Own database name/title }
  DB_USERNAME={ Own database username, usually just root }
  DB_PASSWORD={ Own database password }
      "
      />

      <p className="body-text">
        After this remember to update the database, which can be done by simply
        calling in the terminal:
      </p>

      <CodeSnipptet
        code="
  php artisan migrate
      "
      />

      {/* Creating a Job Post */}
      <h1 className="subheadline-text">Creating a Job Post</h1>
      <p className="body-text">
        Creating a post or model, which then gets published to an database, is
        super easy with Laravel. You simply need to call the createPost()
        function from an form, which will give access to the $request data. This
        data can then be checked and at lastly used to create a new Post.
      </p>

      <CodeSnipptet
        code="
  public function createPost(Request $request) {
    $formFields = $request->validate([
        'title'=> 'required',
        'company'=> 'required',
        'location'=> 'required',
        'website'=> 'required',
        'email'=> ['required', 'email'],
        'tags'=> 'required',
        'description'=> 'required',
    ]);
    
    if($request->hasFile('logo')) {
        $formFields['logo'] = $request->file('logo')->store('logos', 'public');
    }
    $formFields['user_id'] = auth()->id();
    
    Post::create($formFields);
    
    return redirect('/');
  }
      "
      />

      {/* Reading the Job Posts */}
      <h1 className="subheadline-text">Reading the Job Posts</h1>
      <p className="body-text">
        First we check if the user is logged in, which then gives access to
        fetching all of the posts. Basically what is going on is that we first
        get the latest() posts, after which we call a custom function inside the
        Post class (see the second code block), which filters the posts
        depending on the URL or query. E.g. when the URL is ths:
        http://localhost:8000/?search=React. We only show posts which includes
        the word React. At last we simply call the -&gt;get() function which
        retrieves all of the existing posts. You could switch this out with
        -&gt;paginate(12), to only show 12 posts per page.
      </p>

      <CodeSnipptet
        code="
  public function fetchPosts() {
    if (auth()->check()) {
        $posts = Post::latest()->filter(request(['tag', 'search']))->get();

        return view('home', [
            'posts' => $posts
        ]);
    }    

    return redirect('/register');
  }
      "
      />

      <CodeSnipptet
        code="
  class Post extends Model {
    use HasFactory;

    protected $fillable = ['title', 'company', 'location', 'website', 'email', 'description', 'tags', 'logo', 'user_id'];

    //Filter Function
    public function scopeFilter($query, array $filters) {
        if ($filters['tag'] ?? false) {
            $query->where('tags', 'like', '%' . request('tag') . '%');
        }
        
        if ($filters['search'] ?? false) {
            $query->where('title', 'like', '%' . request('search') . '%')
                ->orWhere('description', 'like', '%' . request('search') . '%')
                ->orWhere('tags', 'like', '%' . request('search') . '%');
        }
    }
  }
      "
      />

      {/* Update/Edit Job Post */}
      <h1 className="subheadline-text">Update/Edit Job Post</h1>
      <p className="body-text">
        The editing/updating function works exactly the same as the Create Job
        function, with only a few differences. Instead of calling create(), we
        simply call update() upon an existing post instead. Other than that we
        are just redirecting back to the post we came from. Not a lot of magic
        is happening on this one.
      </p>

      <CodeSnipptet
        code="
  public function editPost(Request $request, Post $post) {
    $formFields = $request->validate([
        'title'=> 'required',
        'company'=> 'required',
        'location'=> 'required',
        'website'=> 'required',
        'email'=> ['required', 'email'],
        'tags'=> 'required',
        'description'=> 'required',
    ]);
    
    if($request->hasFile('logo')) {
        $formFields['logo'] = $request->file('logo')->store('logos', 'public');
    }
    
    $post->update($formFields);

    return redirect('posts/'.$post->id);
  }
        "
      />

      {/* Delete Job Post */}
      <h1 className="subheadline-text">Delete Job Post</h1>
      <p className="description-text">
        At last we also need to be able to delete a model. This is VERY simple.
        I mean the code pretty much explains itself… Laravel is that easy.
      </p>

      <CodeSnipptet
        code="
  public function delete(Post $post) {
    $post->delete();
    return redirect('/');
  }
        "
      />
    </main>
  );
}

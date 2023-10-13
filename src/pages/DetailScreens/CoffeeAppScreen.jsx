import TopSection from "../../components/detailsComponents/TopSection";
import ImageGridSection from "../../components/detailsComponents/ImageGridSection";
import CodeSnipptet from "../../components/detailsComponents/CodeSnippet";
import MediumLink from "../../components/detailsComponents/MediumLink";
import { Projects } from "../../../utils/data";

export default function CoffeeAppScreen() {
  const project = Projects[0]; //Change this to match

  return (
    <main className="px-8 pb-12 pt-20 text-white flex flex-col gap-y-8">
      <TopSection project={project} />
      <ImageGridSection singleImage={project.images[0]} video={project.video} />

      <div className="flex flex-col justify-between pt-20 gap-4 md:flex-row md:items-end">
        <h1 className="headline-text font-[700]">
          A bit of code from this project
        </h1>
        <MediumLink link={project.mediumLink} />
      </div>

      {/* Understanding searchParams */}
      <h1 className="subheadline-text">Add coffee to cart</h1>
      <p className="body-text">
        Lets look at how we add data to the Firestore. This is actually quite
        simple, we simply call addDoc, which then adds the coffee information to
        the cart of the user. The coffee data comes from where the function is
        called, e.g. if it is called from the DetailsScreen.js, it is simply the
        coffee that is being shown information about.
      </p>

      <CodeSnipptet
        code='
  import { db, auth } from "../firebase";
  import { collection, addDoc } from "firebase/firestore";

  const addToCart = (coffee) => {
    const uid = auth.currentUser.uid;
    if (uid === null) return;

    try {
      addDoc(collection(db, "users", uid, "cart"), {
        coffee: coffee,
      });
    } catch (error) {
      console.log(error, "Something went wrong");
    }
};
      '
      />

      {/* Fetch cart products/coffees */}
      <h1 className="subheadline-text">Fetch cart products/coffees</h1>
      <p className="body-text">
        Here we are simply looking into the Firestore database and fetch all of
        the cart products that belong to the user. Where we then update the
        state value, which updates the app.
      </p>

      <CodeSnipptet
        code='
  //Firebase
  import {
    collection,
    getDocs,
  } from "firebase/firestore";
  import { auth, db } from "../firebase";
  
  export const CartScreen = () => {
    const [cartProducts, setCartProducts] = useState([]);
    
    //Fetch Coffee Products
    useEffect(() => {
    getDocs(collection(db, "users", auth.currentUser?.uid, "cart")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartProducts(newData);
      }
    );
    }, []);
  }
      '
      />

      {/* Delete cart coffee */}
      <h1 className="subheadline-text">Delete cart coffee</h1>
      <p className="body-text">
        This is again quite simple, we simply get the id of the cart product,
        and then search for it in the database and delete it. Important, we need
        to update the cartProducts state.
      </p>

      <CodeSnipptet
        code='
  //Firebase
  import {
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { auth, db } from "../firebase";
  
  export const CartScreen = () => {
    const [cartProducts, setCartProducts] = useState([]);
    
    //Delete Coffee Product
    const deleteProduct = (id) => {
      const newCartProducts = cartProducts.filter((product) => {
        return product.id !== id;
      });
      setCartProducts(newCartProducts);
  
      deleteDoc(doc(db, "users", auth.currentUser?.uid, "cart", id));
    };
  }
      '
      />

      {/* Checkout order */}
      <h1 className="subheadline-text">Checkout order</h1>
      <p className="body-text">
        When we checkout we first add a new order, in a completely new
        collection called “orders”. After this is complete, we need to clear the
        cart of the user. Which is done by looping through the cartProducts and
        deleting them all.
      </p>

      <CodeSnipptet
        code='
  //Firebase
  import {
    addDoc,
    collection,
    getDocs,
  } from "firebase/firestore";
  import { auth, db } from "../firebase";

  export const CartScreen = () => {
    const [cartProducts, setCartProducts] = useState([]);
    
    //Handle Checkout
    const handleCheckout = () => {
      addDoc(collection(db, "orders"), {
        createdAt: new Date(),
        user: auth.currentUser?.uid,
        cart: cartProducts,
      });

      setCartProducts([]); //Clear cart

      //Clear cart for user
      cartProducts.map(({ id }) => {
        deleteDoc(doc(db, "users", auth.currentUser?.uid, "cart", id));
      });
    };
  }
        '
      />

      {/* What now? */}
      <h1 className="subheadline-text">What now?</h1>
      <p className="description-text">
        We have now created the users side of the app, but the stores point of
        view is still missing. Therefore, as a challenging task, you can add
        this feature. This can be created by simply fetching all documents
        inside the “orders” collection. After the docs have been collected, you
        can showcase them in a nice layout. <br /> <br />
        Hope you enjoyed.
      </p>
    </main>
  );
}

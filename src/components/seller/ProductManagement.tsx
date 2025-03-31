import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, MoreVertical, Plus, Search, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for product management
const productsMock = [
  { id: 1, name: "Adaptive Keyboard", price: 89.95, category: "Assistive Technology", inventory: 24, status: "Active" },
  { id: 2, name: "Screen Reader Pro", price: 199.50, category: "Assistive Technology", inventory: 12, status: "Active" },
  { id: 3, name: "Smart Home Controller", price: 149.99, category: "Smart Home Assistance", inventory: 18, status: "Active" },
  { id: 4, name: "Adjustable Desk Mount", price: 79.99, category: "Mobility Aids", inventory: 0, status: "Out of Stock" },
  { id: 5, name: "Adaptive Clothing Set", price: 129.95, category: "Adaptive Clothing", inventory: 8, status: "Low Stock" }
];

const ProductManagement = () => {
  const [products, setProducts] = useState(productsMock);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    inventory: "",
    status: "Active",
    description: ""
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
    toast({
      title: "Product Deleted",
      description: "The product has been successfully deleted.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  const handleSaveProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.inventory || !newProduct.description) {
      toast({ title: "Error", description: "Please fill all fields before saving." });
      return;
    }

    const newProductData = {
      id: products.length + 1, 
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      inventory: parseInt(newProduct.inventory),
      status: parseInt(newProduct.inventory) > 0 ? "Active" : "Out of Stock",
      description: newProduct.description
    };

    setProducts([...products, newProductData]); 

    setNewProduct({ name: "", price: "", category: "", inventory: "", status: "Active", description: "" });

    toast({ title: "Success", description: "Product added successfully." });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-9" value={searchTerm} onChange={handleSearch} />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" value={newProduct.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" placeholder="0.00" type="number" value={newProduct.price} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Enter category" value={newProduct.category} onChange={handleInputChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="inventory">Inventory</Label>
                  <Input id="inventory" placeholder="0" type="number" value={newProduct.inventory} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Input value={parseInt(newProduct.inventory) > 0 ? "Active" : "Out of Stock"} readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Enter product description" value={newProduct.description} onChange={handleInputChange} />
              </div>
              <div className="flex justify-end">
                <Button className="w-full sm:w-auto" onClick={handleSaveProduct}>Save Product</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="outofstock">Out of Stock</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium p-4">Product Name</th>
                      <th className="text-left font-medium p-4">Price</th>
                      <th className="text-left font-medium p-4">Category</th>
                      <th className="text-left font-medium p-4">Inventory</th>
                      <th className="text-left font-medium p-4">Status</th>
                      <th className="text-right font-medium p-4">Actions</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <tr key={product.id} className="border-b">
                        <td className="p-4">{product.name}</td>
                        <td className="p-4">${product.price.toFixed(2)}</td>
                        <td className="p-4">{product.category}</td>
                        <td className="p-4">{product.inventory}</td>
                        <td className="p-4">{product.status}</td>
                        <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
      ${product.status === 'Active' ? 'bg-green-100 text-green-800' : 
        product.status === 'Out of Stock' ? 'bg-red-100 text-red-800' : 
        'bg-amber-100 text-amber-800'}`}
  >
    {product.status}
  </span>
                        </td>
                        
                        <td className="p-4 text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                className="text-red-600"
                                onClick={() => handleDelete(product.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductManagement;


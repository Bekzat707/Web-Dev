from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Category, ProductItem
from .serializers import CategorySerializer, ProductItemSerializer

class ProductItemListView(generics.ListCreateAPIView):
    """
    list of all products and creating new products.
    
    - **GET /api/products/** - Returns a list of all products.
    - **POST /api/products/** - Creates a new product.
    """
    queryset = ProductItem.objects.all()
    serializer_class = ProductItemSerializer

class ProductItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    updating, or deleting a single product.
    
    - **GET /api/products/<int:pk>/** - Returns a specific product by ID.
    - **PUT /api/products/<int:pk>/** - Updates a product.
    - **DELETE /api/products/<int:pk>/** - Deletes a product.
    """
    queryset = ProductItem.objects.all()
    serializer_class = ProductItemSerializer

class CategoryListView(generics.ListCreateAPIView):
    """
    list of all categories and creating new categories.
    
    - **GET /api/categories/** - Returns a list of all categories.
    - **POST /api/categories/** - Creates a new category.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    updating, or deleting a single category.
    
    - **GET /api/categories/<int:pk>/** - Returns a specific category by ID.
    - **PUT /api/categories/<int:pk>/** - Updates a category.
    - **DELETE /api/categories/<int:pk>/** - Deletes a category.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsView(generics.ListAPIView):
    """
    list of products by category.
    
    - **GET /api/categories/<int:id>/products/** - Returns a list of products belonging to a specific category.
    """
    serializer_class = ProductItemSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return ProductItem.objects.filter(category_id=category_id)

@api_view(['POST'])
def like_product(request, pk):
    """
    for liking a product.
    
    - **POST /api/products/<int:pk>/like/** - Increases the like count of a product by 1.
    """
    try:
        product = ProductItem.objects.get(pk=pk)
        product.likes += 1
        product.save()
        return Response({'likes': product.likes})
    except ProductItem.DoesNotExist:
        return Response({'error': 'Product not found'}, status=404)
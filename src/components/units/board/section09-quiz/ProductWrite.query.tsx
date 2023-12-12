import { gql } from "@apollo/client";

export const CREATEPRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export const FETCHPRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

export const UPDATEPRODUCT = gql`
  mutation updateProduct(
    $productId: ID
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      _id
      message
      number
    }
  }
`;

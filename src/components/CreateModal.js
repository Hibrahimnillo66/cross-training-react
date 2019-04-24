import React, { PureComponent } from 'react'
import {
  Icon,
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
} from '@material-ui/core'
import '../styles/modal.css'
import { categories } from '../utils/categories';

class CreateModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      shortDescription: '',
      description: '',
      category: '',
      image: 'https://source.unsplash.com/random'
    }
  }

  componentDidUpdate() {
    if (this.props.editPost) {
      const { editPost } = this.props
      const post = editPost[0]
      this.setState({
        title: post.title,
        shortDescription: post.shortDescription,
        description: post.description,
        category: post.category,
        image: post.image
      })
    } else {
      this.setState({
        title: '',
        shortDescription: '',
        description: '',
        category: '',
        image: 'https://source.unsplash.com/random'
      })
    }
  }



  titleChangeHandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  shortDescrChangeHandler = (e) => {
    this.setState({
      shortDescription: e.target.value
    })
  }

  descriptionChangeHandler = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  selectChangeHandler = (e) => {
    this.setState({
      category: e.target.value
    })
  }
  imageChangeHandler = (e) => {
    this.setState({
      image: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    const post = {
      category: this.state.category,
      comments: [],
      publishedAt: Date.now(),
      shortDescription: this.state.shortDescription,
      description: this.state.description,
      image: this.state.image,
      title: this.state.title
    }
    this.props.addPost(post)
  }

  render() {
    const { status, handleClose } = this.props
    return (
      <div >
        <Dialog
          className="create-modal"
          open={status}
          onClose={this.handleClose}
        >
          <form onSubmit={this.onSubmitHandler}>
            <DialogTitle style={{ textAlign: 'center'}}>Create Post</DialogTitle>
            <DialogContent>
                <TextField
                  className="modal-field"
                  autoFocus
                  label="Title"
                  type="text"
                  value={this.state.title}
                  onChange={this.titleChangeHandler}
                  fullWidth
                  />
                <TextField
                  className="modal-field"
                  label="Short Description"
                  type="text"
                  multiline
                  value={this.state.shortDescription}
                  onChange={this.shortDescrChangeHandler}
                  fullWidth
                  />
                <TextField
                  className="modal-field"
                  label="Description"
                  type="text"
                  multiline
                  value={this.state.description}
                  onChange={this.descriptionChangeHandler}
                  fullWidth
                  />
                <FormControl fullWidth className="modal-field">
                  <InputLabel htmlFor='category-select'>Category</InputLabel>
                  <Select
                  value={this.state.category}
                  onChange={this.selectChangeHandler}
                  input={<Input id="category-select" />}
                  fullWidth
                  >
                    {categories.map((category, key) => (
                      <MenuItem 
                      key={key} 
                      value={`${category}`}
                      >
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth className="modal-field">
                  <InputLabel htmlFor="image-url">Image URL</InputLabel>
                  <Input
                  id="image-url"
                  value={this.state.image}
                  onChange={this.imageChangeHandler}
                  endAdornment={
                    <InputAdornment position="end">
                      <Icon>link</Icon>
                    </InputAdornment>
                  }
                  />
                </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" type="button">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
      
    )
  }
}

export default CreateModal